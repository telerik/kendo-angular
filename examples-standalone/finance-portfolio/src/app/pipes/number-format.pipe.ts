import { Pipe, PipeTransform } from '@angular/core';

import { formatCurrency } from './helpers';

@Pipe({
    name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
    transform(value: number): any {
        return formatCurrency(value);
    }
}
