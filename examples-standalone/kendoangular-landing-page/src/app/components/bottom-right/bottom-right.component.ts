import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { FormFieldModule, KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABELS } from '@progress/kendo-angular-label';

@Component({
  selector: 'app-bottom-right',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    FormFieldModule,
    KENDO_BUTTONS,
    KENDO_DROPDOWNS,
    KENDO_INPUTS,
    KENDO_LABELS,
  ],
  templateUrl: './bottom-right.component.html',
  styleUrl: './bottom-right.component.css'
})
export class BottomRightComponent {
  public form: FormGroup;
  public moodOptions: string[] = ['Happy', 'Sad', 'Angry', 'Worried'];
  public waterOptions: Array<{ label: string, value: string }> = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' }
  ];

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      mood: new FormControl(''),
      water: new FormControl('')
    });
  }

  public emailValidator(control: FormControl): { [key: string]: any } | null {
    const emailPattern = /\S+@\S+\.\S+/;
    const value = control.value;
    
    if (value === null || value === '') {
      return { 'required': true };
    }
    
    if (!emailPattern.test(value)) {
      return { 'email': true };
    }
    
    return null;
  }

  public clearForm(): void {
    this.form.reset();
  }
}
