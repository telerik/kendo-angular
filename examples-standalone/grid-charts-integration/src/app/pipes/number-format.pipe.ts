import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency } from './helpers';

@Pipe({
    name: 'numberFormat',
    standalone: true
})
export class NumberFormatPipe implements PipeTransform {

    transform(value: number): any {
        return formatCurrency(value);
    }
}
