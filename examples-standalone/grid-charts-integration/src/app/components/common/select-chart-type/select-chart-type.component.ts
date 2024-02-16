import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'select-chart-type',
  standalone: true,
  imports: [DropDownsModule],
  templateUrl: './select-chart-type.component.html',
})
export class SelectChartTypeComponent {
  @Input() public data?: any[];
  @Input() public chartName?: string;
  @Output() public valueChange = new EventEmitter<string>();

  public onChange(chartName: string) {
    this.valueChange.emit(chartName);
  }
}
