import { Component } from '@angular/core';
import {
  KENDO_CHARTS,
  LegendItemVisualArgs,
  SeriesLabelsContentArgs,
} from '@progress/kendo-angular-charts';
import {
  Element,
  Group,
  Path,
  Rect as RectShape,
  geometry,
  Text,
} from '@progress/kendo-drawing';
import { StockChartComponent } from './stock-chart/stock-chart.component';
import { PieData } from '../../models/charts-models';
import { pieData } from '../../data/charts-data';
import { CurrencyMoverComponent } from './currency-mover/currency-mover.component';
import { CurrencyMover } from '../../models/currency-mover';
import { currencyMovers } from '../../data/currency-movers';
import { CustomMessagesService } from '../../services/custom-messages.service';
import { MessageService } from '@progress/kendo-angular-l10n';

const { Point, Rect, Size } = geometry;

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [KENDO_CHARTS, StockChartComponent, CurrencyMoverComponent],
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.css',
})
export class InvestmentsComponent {
  public pieData: PieData[] = pieData;
  public currencyMovers: CurrencyMover[] = currencyMovers;

  public customMsgService: CustomMessagesService;

  constructor(private messages: MessageService) {
    this.customMsgService = this.messages as CustomMessagesService;
  }

  public labelContent(args: SeriesLabelsContentArgs): string {
    return `${args.dataItem.value}`;
  }

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
      this.getLabelText(args.series.data[args.pointIndex].category)
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
    if (category === 'Real Estates' || category === 'Mutual Funds') {
      return category === 'Real Estates' ? 'realEstates' : 'mutualFunds';
    }
    return category.toLowerCase();
  }
}
