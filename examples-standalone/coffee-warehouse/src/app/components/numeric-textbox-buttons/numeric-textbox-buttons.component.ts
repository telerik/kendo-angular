import { Component, Input } from '@angular/core';
import { plusIcon, minusIcon, xIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'kendo-numeric-textbox-buttons',
  templateUrl: './numeric-textbox-buttons.component.html',
  styleUrl: './numeric-textbox-buttons.component.css'
})
export class NumericTextboxButtonsComponent {
    @Input()
    public value = 12;

    @Input()
    public defaultValue?: number;

    @Input()
    public min?: number;

    @Input()
    public max?: number;

    @Input()
    public step = 1;

    @Input()
    public decimals = 0;

    @Input()
    public format = '#';

    @Input()
    public clearButton = false;

    public plusIcon = plusIcon;
    public minusIcon = minusIcon;
    public clearIcon = xIcon;

    public increaseValue(): void {
        if (this.max && this.value + this.step >= this.max) {
            this.value = this.max;
            return;
        }
        this.value += this.step;
    }

    public decreaseValue(): void {
        if (this.min && this.value - this.step <= this.min) {
            this.value = this.min;
            return;
        }
        this.value -= this.step;
    }

    public clearValue(): void {
        if (this.defaultValue) {
            this.value = this.defaultValue;
        }
    }
}
