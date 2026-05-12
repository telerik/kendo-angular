import { Injectable, signal, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PageHeaderService {
  title = signal<string>('');
  subtitle = signal<string>('');
  actions = signal<TemplateRef<any> | null>(null);
}
