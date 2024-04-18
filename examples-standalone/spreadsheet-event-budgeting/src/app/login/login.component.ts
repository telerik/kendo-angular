import { Component, ViewEncapsulation } from '@angular/core';
import { SVGIcon, eyeIcon } from '@progress/kendo-svg-icons';
import { InputType } from '@progress/kendo-angular-inputs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  public inputType: InputType = 'password';
  public eyeIcon: SVGIcon = eyeIcon;
  
  public form: FormGroup = new FormGroup({
    username: new FormControl('Administrator'),
    password: new FormControl('MySecretPassword'),
  });

  public toggleVisibility(): void {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }
}
