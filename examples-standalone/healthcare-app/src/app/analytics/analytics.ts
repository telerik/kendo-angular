import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { KENDO_CHARTS, LineStyle, ChartComponent } from '@progress/kendo-angular-charts';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_GAUGES } from '@progress/kendo-angular-gauges';
import { downloadIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { LegendItemVisualArgs } from '@progress/kendo-angular-charts';
import { Group, Layout, Text, geometry, drawing, exportPDF } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';
const { Rect: GeoRect, Size } = geometry;
const { Circle, Path } = drawing;

interface Patient {
  name: string;
  id: string;
}

interface VitalSeries {
  name: string;
  data: (number | null)[];
  color: string;
}

interface LabMetric {
  name: string;
  current: number;    // Average/current value
  target: number;     // Target value for the range
  min: number;        // Min value for the range
  max: number;        // Absolute max for the scale
  markerLabel: string;
  markerValue: number;
  color: string;      // Color for current value
  plotBands: { from: number; to: number; color: string }[];  // Multiple grey bands
}

@Component({
  selector: 'app-analytics',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './analytics.html',
  styleUrls: ['./analytics.css'],
  imports: [
    KENDO_CHARTS,
    KENDO_DROPDOWNS,
    KENDO_BUTTONS,
    KENDO_ICONS,
    KENDO_GAUGES
  ]
})
export class AnalyticsComponent {
  @ViewChild('vitalsChart') vitalsChart!: ChartComponent;

  public downloadIcon: SVGIcon = downloadIcon;
  public lineType: LineStyle = 'smooth';

  public patients: Patient[] = [
    { name: 'James Wilson', id: 'P-104582' },
    { name: 'Sophia Martinez', id: 'P-103291' },
    { name: 'Michael O\'Connor', id: 'P-105847' },
    { name: 'Ava Patel', id: 'P-102156' },
    { name: 'Emily Chen', id: 'P-106733' }
  ];

  private _selectedPatient: Patient = this.patients[0];

  public get selectedPatient(): Patient {
    return this._selectedPatient;
  }

  public set selectedPatient(value: Patient) {
    this._selectedPatient = value;
    this.generateRandomChartData();
  }

  public categories: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

  public seriesData: VitalSeries[] = [
    {
      name: 'Systolic BP',
      color: '#FF8a83',
      data: [27, 25, 27.5, 26, 33]
    },
    {
      name: 'Diastolic BP',
      color: '#F5C542',
      data: [25, 25, 33, 25, 15]
    },
    {
      name: 'Heart Rate',
      color: '#4CAF50',
      data: [14, 20, 25, 21, 15]
    },
    {
      name: 'SpO2 (%)',
      color: '#3F7FD4',
      data: [8.5, 15, 18, 20.5, 18]
    },
    {
      name: 'Temperature',
      color: '#9C5BC0',
      data: [8.5, 6, 15, 9, 11]
    },
    {
      name: 'Pulse',
      color: '#E75B8D',
      data: [1, 6.5, 9, 10, 13]
    }
  ];

  public legendItemVisual = (args: LegendItemVisualArgs): Group => {
    const group = new Group();
    const layout = new Layout(new GeoRect(new geometry.Point(0, 0), new Size(200, 20)), {
      spacing: 5,
      alignItems: 'center'
    });

    const color = args.series.color as string;
    const circleGeometry = new geometry.Circle(new geometry.Point(6, 8), 6);
    const circle = new Circle(circleGeometry, {
      fill: { color },
      stroke: { color, width: 0 }
    });

    const labelText = new Text(args.series.name || '', new geometry.Point(0, 0), {
      font: '13px Inter, sans-serif',
      fill: { color: '#4A5666' }
    });

    layout.append(circle);
    layout.append(labelText);
    layout.reflow();

    group.append(layout);
    return group;
  };

  // Alerts Over Time data
  public alertsCategories: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  public alertsInfo: number[] = [19, 8.5, 17.5, 22, 8.5, 9, 17, 12, 20, 10];
  public alertsWarning: number[] = [5, 8.5, 0, 1, 11, 3, 5, 8, 0, 3];
  public alertsCritical: number[] = [5, 9, 3, 9, 7, 3, 6, 6, 10, 1];

  // Lab Results Range data
  public labMetrics: LabMetric[] = [
    {
      name: 'Glucose',
      current: 11,      // Average value
      target: 13,       // Target/optimal max range
      min: 0,
      max: 20,
      markerLabel: 'MIN',
      markerValue: 10,
      color: '#F5C542',
      plotBands: [
        { from: 0, to: 4, color: '#B8B8B8' },      // Dark grey
        { from: 4, to: 9, color: '#D0D0D0' },      // Medium grey
        { from: 9, to: 13, color: '#E8E8E8' }      // Light grey
      ]
    },
    {
      name: 'Hemoglobin',
      current: 7,       // Average value
      target: 12.5,     // Target/optimal max range
      min: 0,
      max: 20,
      markerLabel: 'MIN',
      markerValue: 7,
      color: '#F4A0A0',
      plotBands: [
        { from: 0, to: 4, color: '#B8B8B8' },      // Dark grey
        { from: 4, to: 8, color: '#D0D0D0' },      // Medium grey
        { from: 8, to: 12.5, color: '#E8E8E8' }    // Light grey
      ]
    },
    {
      name: 'WBC Count',
      current: 16,      // Average value
      target: 18,       // Target/optimal max range
      min: 0,
      max: 20,
      markerLabel: 'MAX',
      markerValue: 15,
      color: '#81D4A4',
      plotBands: [
        { from: 0, to: 6, color: '#B8B8B8' },      // Dark grey
        { from: 6, to: 12, color: '#D0D0D0' },     // Medium grey
        { from: 12, to: 18, color: '#E8E8E8' }     // Light grey
      ]
    }
  ];

  // Alerts by Category data
  public alertsCategoryData: { category: string; value: number; color: string }[] = [
    { category: 'High Cholesterol', value: 12, color: '#F4A0A0' },
    { category: 'Arrhythmia', value: 8, color: '#F5C542' },
    { category: 'Hypertension', value: 5, color: '#4CAF50' },
    { category: 'Medication Adherence', value: 4, color: '#5B8FF9' },
    { category: 'Cardiac Risk', value: 3, color: '#9C5BC0' },
    { category: 'Inflammation', value: 1, color: '#E75B8D' }
  ];

  public labelContent = (e: any): string => e.category;

  public donutLegendItemVisual = (args: LegendItemVisualArgs): Group => {
    const group = new Group();
    const layout = new Layout(new GeoRect(new geometry.Point(0, 0), new Size(200, 20)), {
      spacing: 5,
      alignItems: 'center'
    });

    const color = args.options.markers?.background || args.options.markers?.border?.color || '#ccc';
    const circleGeometry = new geometry.Circle(new geometry.Point(6, 8), 6);
    const circle = new Circle(circleGeometry, {
      fill: { color: color as string },
      stroke: { color: color as string, width: 0 }
    });

    const pointIndex = args.pointIndex ?? 0;
    const value = this.alertsCategoryData[pointIndex]?.value ?? '';
    const labelText = new Text(`${pointIndex}:${value}`, new geometry.Point(0, 0), {
      font: '13px Inter, sans-serif',
      fill: { color: '#4A5666' }
    });

    layout.append(circle);
    layout.append(labelText);
    layout.reflow();

    group.append(layout);
    return group;
  };

  // Risk Score data
  public riskScore = 50;

  public riskLevels = [
    { label: 'High Risk', range: '0\u201339', color: '#E65548' },
    { label: 'Medium Risk', range: '40\u201369', color: '#C5A84E' },
    { label: 'Low Risk', range: '70\u2013100', color: '#4CAF50' }
  ];

  /**
   * Generates random data for all charts when a patient is selected
   */
  private generateRandomChartData(): void {
    // Randomize Vitals Over Time (seriesData)
    this.seriesData = this.seriesData.map(series => ({
      ...series,
      data: this.categories.map(() => Math.floor(Math.random() * 30) + 5) // Random values between 5-35
    }));

    // Randomize Alerts Over Time
    this.alertsInfo = this.alertsCategories.map(() => Math.floor(Math.random() * 20) + 1);
    this.alertsWarning = this.alertsCategories.map(() => Math.floor(Math.random() * 12) + 1);
    this.alertsCritical = this.alertsCategories.map(() => Math.floor(Math.random() * 10) + 1);

    // Randomize Lab Results Range
    this.labMetrics = this.labMetrics.map(metric => ({
      ...metric,
      current: Math.floor(Math.random() * (metric.target - 2)) + 2,
      markerValue: Math.floor(Math.random() * metric.target) + 1
    }));

    // Randomize Alerts by Category
    this.alertsCategoryData = this.alertsCategoryData.map(alert => ({
      ...alert,
      value: Math.floor(Math.random() * 15) + 1
    }));

    // Randomize Risk Score
    this.riskScore = Math.floor(Math.random() * 100) + 1;
  }

  /**
   * Exports the vitals chart to PDF
   */
  public exportChart(): void {
    if (this.vitalsChart) {
      const visual = this.vitalsChart.exportVisual();
      exportPDF(visual, {
        landscape: true,
      }).then((dataURI: string) => {
        saveAs(dataURI, 'vitals-chart.pdf');
      });
    }
  }
}
