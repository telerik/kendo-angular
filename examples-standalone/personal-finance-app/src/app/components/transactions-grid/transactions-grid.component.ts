import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ColumnMenuSettings,
  KENDO_GRID,
  PDFModule,
  RowArgs,
} from '@progress/kendo-angular-grid';
import { KENDO_PAGER } from '@progress/kendo-angular-pager';
import { fileExcelIcon, filePdfIcon, SVGIcon } from '@progress/kendo-svg-icons';

import { Transaction } from '../../models/transaction';
import { gridTransactions } from '../../data/transactions';
import {
  IntlModule,
  IntlService,
  NumberFormatOptions,
} from '@progress/kendo-angular-intl';
import { ChipThemeColor, KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { MessageService } from '@progress/kendo-angular-l10n';
import { CustomMessagesService } from '../../services/custom-messages.service';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';

@Component({
  selector: 'app-transactions-grid',
  standalone: true,
  imports: [KENDO_GRID, KENDO_PAGER, IntlModule, KENDO_BUTTONS, PDFModule],
  templateUrl: './transactions-grid.component.html',
})
export class TransactionsGridComponent {
  public gridData: Transaction[] = gridTransactions;
  public fileExcelIcon: SVGIcon = fileExcelIcon;
  public filePdfIcon: SVGIcon = filePdfIcon;
  @Input() public pageSize = 10;
  public buttonCount = 10;
  public sizes = [10, 20, 50];
  public customMsgService: CustomMessagesService;

  public customCurrencyOptions: NumberFormatOptions = {
    style: 'currency',
    currencyDisplay: 'code',
    currency: 'USD',
  };
  public menuSettings: ColumnMenuSettings = {
    lock: true,
    stick: true,
    setColumnPosition: { expanded: true },
    autoSizeColumn: true,
    autoSizeAllColumns: true,
  };

  constructor(public intl: IntlService, private messages: MessageService) {
    this.customMsgService = this.messages as CustomMessagesService;
  }

  @Output() public rowSelection = new EventEmitter<Transaction>();

  public selectedKeys: any[] = [];

  public mySelectionKey(context: RowArgs): string {
    return context.dataItem;
  }

  public onSelectedKeysChange(selectedItem: any) {
    this.rowSelection.emit(
      selectedItem[0] ? selectedItem[0] : new Transaction()
    );
  }

  public getThemeColor(orderStatus: string): ChipThemeColor {
    switch (orderStatus) {
      case 'Pending':
        return 'warning';
      case 'Postponed':
        return 'error';
      case 'Published':
        return 'success';
      default:
        return 'info';
    }
  }

  public allData(): ExcelExportData {
    const result = { data: gridTransactions };

    return result;
  }
}
