import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { KENDO_GRID, PageChangeEvent } from '@progress/kendo-angular-grid';
import { GridDataService, GridItem } from '../../services/grid-data.service';

@Component({
  selector: 'app-transactions-dashboard',
  standalone: true,
  imports: [CommonModule, KENDO_GRID, ButtonsModule],
  templateUrl: './transactions-dashboard.component.html',
  styleUrls: ['./transactions-dashboard.component.css']
})
export class TransactionsDashboardComponent implements OnInit {
  public gridData: GridItem[] = [];
  public pageSize = 5;
  public skip = 0;
  public total = 0;
  public pageSizes = [5, 10, 15];

  constructor(
    private gridDataService: GridDataService,
  ) {}

  ngOnInit(): void {
    this.loadGridData();
  }

  private loadGridData(): void {
    this.total = this.gridDataService.getTotal();
    this.gridData = this.gridDataService.getPagedData(this.skip, this.pageSize);
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.pageSize = event.take;
    this.loadGridData();
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
