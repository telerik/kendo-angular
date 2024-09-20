import { Component, HostBinding } from "@angular/core";
import { MessageService } from "@progress/kendo-angular-l10n";
import { CustomMessagesService } from "./services/custom-messages.service";
import { SettingsService } from "./settings.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  public selected = "Team";
  public items: Array<any> = [];
  public customMsgService: CustomMessagesService;
  public mini = true;

  @HostBinding('style.--kendo-font-size') 
  public fontSize = '16px'

  @HostBinding('style.--kendo-line-height') 
  public lineHeight = '1.2px'

  constructor(
    public msgService: MessageService,
    private settingsService: SettingsService) {
    this.customMsgService = this.msgService as CustomMessagesService;
    this.settingsService.changes.subscribe(settings => {
      console.log(settings);
      for (let setting in settings) {
        if (setting === 'fontSize' || setting === 'lineHeight' || setting === 'letterSpacing') {
          this[setting] = `${settings[setting]}px`;
        }
      }
    });
  }
}
