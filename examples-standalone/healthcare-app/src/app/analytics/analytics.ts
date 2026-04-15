import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import {
  ChartComponent,
  KENDO_CHARTS,
  LegendItemVisualArgs,
  LineStyle,
} from '@progress/kendo-angular-charts';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_GAUGES } from '@progress/kendo-angular-gauges';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { drawing, exportPDF, geometry, Group, Layout, Text } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';
import { downloadIcon, SVGIcon } from '@progress/kendo-svg-icons';
import {
  AnalyticsPatient,
  VitalSeries,
  LabMetric,
  AlertCategoryItem,
  ANALYTICS_PATIENTS,
  VITALS_SERIES_DATA,
  ALERTS_CATEGORIES,
  ALERTS_INFO,
  ALERTS_WARNING,
  ALERTS_CRITICAL,
  LAB_METRICS,
  ALERTS_CATEGORY_DATA,
  RISK_LEVELS,
} from '../data/analytics.data';
const { Rect: GeoRect, Size } = geometry;
const { Circle, Path } = drawing;

@Component({
  selector: 'app-analytics',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './analytics.html',
  styleUrls: ['./analytics.css'],
  imports: [KENDO_CHARTS, KENDO_DROPDOWNS, KENDO_BUTTONS, KENDO_ICONS, KENDO_GAUGES],
})
export class AnalyticsComponent {
  @ViewChild('vitalsChart') vitalsChart!: ChartComponent;

  public downloadIcon: SVGIcon = downloadIcon;
  public lineType: LineStyle = 'smooth';

  public patients: AnalyticsPatient[] = [...ANALYTICS_PATIENTS];

  private _selectedPatient: AnalyticsPatient = this.patients[0];

  public get selectedPatient(): AnalyticsPatient {
    return this._selectedPatient;
  }

  public set selectedPatient(value: AnalyticsPatient) {
    this._selectedPatient = value;
    this.generateRandomChartData();
  }

  public categories: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

  public seriesData: VitalSeries[] = [...VITALS_SERIES_DATA];

  public legendItemVisual = (args: LegendItemVisualArgs): Group => {
    const group = new Group();
    const layout = new Layout(new GeoRect(new geometry.Point(0, 0), new Size(200, 20)), {
      spacing: 5,
      alignItems: 'center',
    });

    const color = args.series.color as string;
    const circleGeometry = new geometry.Circle(new geometry.Point(6, 8), 6);
    const circle = new Circle(circleGeometry, {
      fill: { color },
      stroke: { color, width: 0 },
    });

    const labelText = new Text(args.series.name || '', new geometry.Point(0, 0), {
      font: '13px Inter, sans-serif',
      fill: { color: '#4A5666' },
    });

    layout.append(circle);
    layout.append(labelText);
    layout.reflow();

    group.append(layout);
    return group;
  };

  // Alerts Over Time data
  public alertsCategories: string[] = [...ALERTS_CATEGORIES];
  public alertsInfo: number[] = [...ALERTS_INFO];
  public alertsWarning: number[] = [...ALERTS_WARNING];
  public alertsCritical: number[] = [...ALERTS_CRITICAL];

  // Lab Results Range data
  public labMetrics: LabMetric[] = [...LAB_METRICS];

  // Alerts by Category data
  public alertsCategoryData: AlertCategoryItem[] = [...ALERTS_CATEGORY_DATA];

  public labelContent = (e: any): string => e.category;

  public donutLegendItemVisual = (args: LegendItemVisualArgs): Group => {
    const group = new Group();
    const layout = new Layout(new GeoRect(new geometry.Point(0, 0), new Size(200, 20)), {
      spacing: 5,
      alignItems: 'center',
    });

    const color = args.options.markers?.background || args.options.markers?.border?.color || '#ccc';
    const circleGeometry = new geometry.Circle(new geometry.Point(6, 8), 6);
    const circle = new Circle(circleGeometry, {
      fill: { color: color as string },
      stroke: { color: color as string, width: 0 },
    });

    const pointIndex = args.pointIndex ?? 0;
    const value = this.alertsCategoryData[pointIndex]?.value ?? '';
    const labelText = new Text(`${pointIndex}:${value}`, new geometry.Point(0, 0), {
      font: '13px Inter, sans-serif',
      fill: { color: '#4A5666' },
    });

    layout.append(circle);
    layout.append(labelText);
    layout.reflow();

    group.append(layout);
    return group;
  };

  // Risk Score data
  public riskScore = 50;

  public riskLevels = [...RISK_LEVELS];

  /**
   * Generates random data for all charts when a patient is selected
   */
  private generateRandomChartData(): void {
    // Randomize Vitals Over Time (seriesData)
    this.seriesData = this.seriesData.map((series) => ({
      ...series,
      data: this.categories.map(() => Math.floor(Math.random() * 30) + 5), // Random values between 5-35
    }));

    // Randomize Alerts Over Time
    this.alertsInfo = this.alertsCategories.map(() => Math.floor(Math.random() * 20) + 1);
    this.alertsWarning = this.alertsCategories.map(() => Math.floor(Math.random() * 12) + 1);
    this.alertsCritical = this.alertsCategories.map(() => Math.floor(Math.random() * 10) + 1);

    // Randomize Lab Results Range
    this.labMetrics = this.labMetrics.map((metric) => ({
      ...metric,
      current: Math.floor(Math.random() * (metric.target - 2)) + 2,
      markerValue: Math.floor(Math.random() * metric.target) + 1,
    }));

    // Randomize Alerts by Category
    this.alertsCategoryData = this.alertsCategoryData.map((alert) => ({
      ...alert,
      value: Math.floor(Math.random() * 15) + 1,
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
