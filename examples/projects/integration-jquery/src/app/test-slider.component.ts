import { Component } from '@angular/core';

@Component({
    selector: 'app-test-slider',
    template: `
        <p>Kendo UI for Angular Slider:</p>
        <kendo-slider [min]="min"
                  [max]="max"
                  [smallStep]="smallStep"
                  [showButtons]="showButtons"
                  [tickPlacement]="tickPlacement"
                  [(ngModel)]="sliderValue"></kendo-slider>
        <p>Slider value: {{ sliderValue }}</p>
    `
})
export class TestSliderComponent {
    public showButtons = true;
    public tickPlacement = 'none';
    public sliderValue = 5;
    public min = 1;
    public max = 90;
    public smallStep = 1;
}
