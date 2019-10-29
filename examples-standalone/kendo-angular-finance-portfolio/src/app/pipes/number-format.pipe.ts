import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

    transform(value: number): any {
        if (value >= 1000000000) {
            return (value / 1000000000).toFixed(3) + 'B';
        }

        if (value >= 1000000) {
            return (value / 1000000).toFixed(3) + 'M';
        }

        if (value >= 1000) {
            return (value / 1000).toFixed(3) + 'K';
        }

        return value;
    }
}
