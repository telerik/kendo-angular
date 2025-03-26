import { Component } from '@angular/core';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import { KENDO_ICONS, SVGIcon } from '@progress/kendo-angular-icons';
import { User } from '../../models/user';
import { cardDetails, user } from '../../data/user-details';
import { CardDetails } from '../../models/card-details';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';
import { cloudIcon } from '@progress/kendo-svg-icons';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MessageService } from '@progress/kendo-angular-l10n';
import { CustomMessagesService } from '../../services/custom-messages.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    KENDO_INPUTS,
    KENDO_LABELS,
    KENDO_DATEINPUTS,
    KENDO_ICONS,
    KENDO_DROPDOWNS,
    KENDO_BUTTONS,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  public user: User = user;
  public cardDetails: CardDetails = cardDetails;
  public userForm!: FormGroup;
  public cardForm!: FormGroup;
  public cloudIcon: SVGIcon = cloudIcon;
  public countries: string[] = [];

  public customMsgService: CustomMessagesService;

  constructor(
    private formBuilder: FormBuilder,
    private messages: MessageService
  ) {
    this.customMsgService = this.messages as CustomMessagesService;
    this.countries = Array.isArray(this.user.country)
      ? this.user.country
      : [this.user.country];
    this.initUserForm();
    this.initCardForm();
  }

  public saveUserInfo(): void {
    if (this.userForm.valid) {
      const formValues = this.userForm.value;
      this.user = { ...this.user, ...formValues };

      this.userForm.markAsUntouched();
    }
  }

  public saveCardInfo(): void {
    if (this.cardForm.valid) {
      const formValues = this.cardForm.value;
      this.cardDetails = { ...this.cardDetails, ...formValues };

      this.cardForm.markAsUntouched();
    }
  }

  private initUserForm(): void {
    this.userForm = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      surname: [this.user.surname, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      tag: [this.user.tag],
      birthday: [this.user.birthday],
      country: [this.user.country[0]],
      address: [this.user.address],
      postCode: [this.user.postCode],
    });
  }

  private initCardForm(): void {
    this.cardForm = this.formBuilder.group({
      bank: [this.cardDetails.bank, Validators.required],
      expirationDate: [this.cardDetails.expirationDate, Validators.required],
      cardHolder: [this.cardDetails.cardHolder, Validators.required],
      cardNumber: [this.cardDetails.cardNumber, [Validators.required]],
    });

    // If you have an existing card number, set it
    if (this.cardDetails.cardNumber) {
      this.cardForm.get('cardNumber')?.setValue(this.cardDetails.cardNumber);
    }
  }
}
