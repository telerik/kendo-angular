import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { customers } from './customers';

@Component({
    selector: 'app-root',
    imports: [CommonModule, GridModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'grid-csp-enabled';
    public gridData: any[] = customers;
}
