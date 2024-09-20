import { AfterViewInit, Component, HostBinding } from "@angular/core";
import { MessageService } from "@progress/kendo-angular-l10n";
import { CustomMessagesService } from "./services/custom-messages.service";
import { SettingsService } from "./settings.service";
import { isPresent } from "@progress/kendo-angular-common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements AfterViewInit {
  public selected = "Team";
  public items: Array<any> = [];
  public customMsgService: CustomMessagesService;
  public mini = true;

  @HostBinding('style.--kendo-font-size') 
  public fontSize = '16px';

  @HostBinding('style.--kendo-line-height') 
  public lineHeight = '1.2px';

  @HostBinding('style.--kendo-letter-spacing-normal') 
  public letterSpacing = '0px';

  private themeLinkElement: HTMLLinkElement;

  public ngAfterViewInit(): void {
    this.themeLinkElement = document.getElementById('theme') as HTMLLinkElement;
  }

  constructor(
    public msgService: MessageService,
    private settingsService: SettingsService) {
    this.customMsgService = this.msgService as CustomMessagesService;
    this.settingsService.changes.subscribe(settings => {
      console.log(settings);
      for (let setting in settings) {
        if (setting === 'fontSize' || setting === 'lineHeight' || setting === 'letterSpacing') {
          this[setting] = `${settings[setting]}px`;
        } else if (setting === 'colorTheme' && isPresent(this.themeLinkElement)) {
          const newThemeLink = this.getThemeLink(settings[setting]);
          this.themeLinkElement.href = newThemeLink;
        }
      }
    });
  }

  private getThemeLink(themeKey: string): string {
    switch(themeKey) {
      case 'contrast':
        return 'https://kendo.cdn.telerik.com/themes/8.2.1/default/default-ocean-blue.css';
      case 'dark':
        return 'https://kendo.cdn.telerik.com/themes/8.2.1/bootstrap/bootstrap-main-dark.css';
      default:
        return 'https://kendo.cdn.telerik.com/themes/8.2.1/default/default-turquoise.css';
    }

  }
}
