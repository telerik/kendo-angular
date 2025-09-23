import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { EditorModule } from '@progress/kendo-angular-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, InputsModule, EditorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ColorPicker ARIA Accessibility Fix';
  
  public selectedColor = '#ff0000';
  public editorValue = '<p>Sample text for color picker testing</p>';
  
  public onColorChange(color: string): void {
    this.selectedColor = color;
  }
}
