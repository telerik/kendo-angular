import { Injectable } from '@angular/core';
import { CldrIntlService } from '@progress/kendo-angular-intl';
import '@progress/kendo-angular-intl/locales/es/all';

@Injectable()
export class MyService extends CldrIntlService {
  constructor() {
    super('es-ES');
  }

}
