import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AxisLabelContentArgs,
  DrilldownEvent,
  KENDO_CHARTS,
  LegendItemVisualArgs,
  ValueAxisLabels,
} from '@progress/kendo-angular-charts';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { MessageService } from '@progress/kendo-angular-l10n';
import {
  Element,
  geometry,
  Group,
  Path,
  Rect as RectShape,
  Text,
} from '@progress/kendo-drawing';
import {
  bondsMonthlyData,
  bondsYearlyData,
  realEstateMonthlyData,
  realEstateYearlyData,
  stocksMonthlyData,
  stocksYearlyData,
} from '../../data/charts-data';
import { CustomMessagesService } from '../../services/custom-messages.service';
import { TransactionsGridComponent } from '../transactions-grid/transactions-grid.component';

const { Point, Rect, Size } = geometry;

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    TransactionsGridComponent,
    CommonModule,
    KENDO_CHARTS,
    KENDO_DROPDOWNS,
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css',
})
export class AnalyticsComponent {
  public stocksYearlyData = stocksYearlyData;
  public realEstateYearlyData = realEstateYearlyData;
  public bondsYearlyData = bondsYearlyData;

  public stocksMonthlyData = stocksMonthlyData;
  public realEstateMonthlyData = realEstateMonthlyData;
  public bondsMonthlyData = bondsMonthlyData;

  public drilldownLevel: number = 0;

  public isDrilledDown = false;
  public activeSeries: string = '';

  public customMsgService: CustomMessagesService;

  constructor(private messages: MessageService) {
    this.customMsgService = this.messages as CustomMessagesService;
    this.categoryAxisLabels = this.categoryAxisLabels.bind(this);

    this.drillDownLevels = this.setDrilldownLevelData();
    this.defaultItem = this.setdDefaultItem('year');

    this.customMsgService.localeChange.subscribe(() => {
      this.defaultItem = this.setdDefaultItem(
        this.drilldownLevel === 0 ? 'year' : 'month'
      );
      this.drillDownLevels = this.setDrilldownLevelData();
    });
  }

  private disabledItems: string[] = ['Month', 'Mes', 'Monat', 'Mois'];

  public defaultItem: { text: string; value: number } = {
    text: '',
    value: 0,
  };

  public drillDownLevels: { text: string; value: number }[] = [];

  public valueAxisLabels: ValueAxisLabels = {
    content: (args) => {
      return '$' + args.value / 1000 + 'k';
    },
  };

  public categoryAxisLabels(args: AxisLabelContentArgs): any {
    if (args.value.length > 3) {
      return this.customMsgService
        .translate(args.value.toLowerCase())
        .substring(0, 3);
    }
    return args.value;
  }

  public onDrilldown(event: DrilldownEvent): void {
    this.categoryAxisLabels = this.categoryAxisLabels.bind(this);
    this.isDrilledDown = true;
    this.activeSeries = event.series.name;
    console.log(this.activeSeries);

    this.defaultItem = this.setdDefaultItem('month');
  }

  public onDrilldownLevelChange(event: any): void {
    this.drilldownLevel = event.value;
    console.log(this.drilldownLevel);

    if (this.drilldownLevel === 0) {
      this.drilldownLevel = event.value;
      this.isDrilledDown = false;
      this.activeSeries = '';
    }
  }

  public itemDisabled = (itemArgs: { dataItem: any; index: number }) => {
    return this.disabledItems.indexOf(itemArgs.dataItem.text) !== -1;
  };

  public labelsVisual = (args: LegendItemVisualArgs): Element => {
    const rectOptions = {
      stroke: { width: 20, color: 'transparent' },
      fill: { color: 'transparent' },
    };
    const rectGeometry = new Rect(new Point(0, 10), new Size(60, 10));
    const rect: RectShape = new RectShape(rectGeometry, rectOptions);

    const pathColor = args.options.markers.border.color;
    const path1 = new Path({
      stroke: {
        color: pathColor,
        width: 5,
      },
    });

    path1.moveTo(0, 7).lineTo(20, 7).close();

    const labelText = this.customMsgService.translate(
      this.getLabelText(args.series.name)
    );
    const labelFont = args.options.labels.font;
    const fontColor = args.options.labels.color;
    const textOptions = { font: labelFont, fill: { color: fontColor } };
    const text = new Text(labelText, new Point(27, 0), textOptions);

    const group = new Group();

    group.append(rect, path1, text);

    if (!args.active) {
      group.opacity(0.5);
    }

    return group;
  };

  private getLabelText(category: string): string {
    if (category === 'Real Estate') {
      return (category = 'realEstates');
    }
    return category.toLowerCase();
  }

  private setDrilldownLevelData(): { text: string; value: number }[] {
    return [
      { text: this.customMsgService.translate('year'), value: 0 },
      { text: this.customMsgService.translate('month'), value: 1 },
    ];
  }

  private setdDefaultItem(currentLevel: string): {
    text: string;
    value: number;
  } {
    if (currentLevel === 'year') {
      return {
        text: this.customMsgService.translate('year'),
        value: 0,
      };
    } else {
      return {
        text: this.customMsgService.translate('month'),
        value: 1,
      };
    }
  }
}
