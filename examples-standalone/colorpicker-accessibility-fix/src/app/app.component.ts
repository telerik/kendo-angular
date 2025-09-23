import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsModule } from '@progress/kendo-angular-inputs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, InputsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ColorPicker ARIA Accessibility Fix';
  
  public selectedColor = '#ff0000';
  
  public onColorChange(color: string): void {
    this.selectedColor = color;
  }
}
