import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "select-series-btn-group",
	templateUrl: './select-series-btn-group.component.html'
})
export class SelectSeriesBtnGroupComponent {
    @Input() public data: string[];
    @Output() public valueChange = new EventEmitter<string[]>();

    public selectedSeries: string[] = ['price', 'pe'];

    public selectedChange(selected: boolean, series){
        if(selected){
            this.selectedSeries.push(series.field);
        }else{
            this.selectedSeries = this.selectedSeries.filter(s => s !== series.field);
        }
        this.valueChange.emit(this.selectedSeries);
    }

    public isSelected(series): boolean{
        if(this.selectedSeries.indexOf(series.field) >= 0){
            return true;
        }else{
            return false;
        }
    }
}
