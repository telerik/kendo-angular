import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { ColumnMenuSettings, KENDO_GRID } from '@progress/kendo-angular-grid';
import { KENDO_PAGER } from '@progress/kendo-angular-pager';
import { GridDataService, GridItem } from '../../../services/grid-data.service';

@Component({
  selector: 'app-transactions-dashboard',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, KENDO_GRID, KENDO_BUTTONS, KENDO_PAGER],
  templateUrl: './transactions-dashboard.component.html',
  styleUrls: ['./transactions-dashboard.component.css']
})
export class TransactionsDashboardComponent implements OnInit {
  public gridData: GridItem[] = [];
  public pageSizes = [5, 10, 15];
  public menuSettings: ColumnMenuSettings = {
    sort: true,
    filter: true,
    columnChooser: false,
  };

  constructor(
    private gridDataService: GridDataService,
  ) {}

  ngOnInit(): void {
    this.loadGridData();
  }

  private loadGridData(): void {
    this.gridData = this.gridDataService.getGridData()
  }

  public getAmountClass(positive: boolean): string {
    return positive ? 'positive-amount' : 'negative-amount';
  }

  public getStatusClass(status: string): string {
    switch(status.toLowerCase()) {
      case 'approved':
        return 'status-success';
      case 'declined':
        return 'status-error';
      case 'pending':
        return 'status-warning';
      default:
        return '';
    }
  }
  
  public getSafeFlag(flag: SafeHtml): SafeHtml {
    return flag;
  }
}
