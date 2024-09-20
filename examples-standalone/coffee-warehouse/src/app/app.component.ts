import { AfterViewInit, Component, HostBinding } from "@angular/core";
import { MessageService } from "@progress/kendo-angular-l10n";
import { CustomMessagesService } from "./services/custom-messages.service";
import { SettingsService } from "./settings.service";
import { isPresent } from "@progress/kendo-angular-common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
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

  @HostBinding('style.--kendo-font-family') 
  public fontFamily = `'Roboto', sans-serif`;

  @HostBinding('style.--text-decoration') 
  public textDecoration = 'none';

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
        switch (setting) {
          case 'fontSize':
          case 'letterSpacing':
            this[setting] = `${settings[setting]}px`;
            break;
          case 'lineHeight':
            this[setting] = `${settings[setting]}em`;
            break;
          case 'colorTheme':
            if (isPresent(this.themeLinkElement)) {
              const newThemeLink = this.getThemeLink(settings[setting]);
              this.themeLinkElement.href = newThemeLink;
            }
            break;
          case 'fontFamily':
            this.fontFamily = this.getFontFamily(settings[setting]);
            break;
          case 'underlineLinks':
            this.textDecoration = settings[setting] ? 'underline' : 'none';
            break;
        }
      }
    });
  }

  private getThemeLink(themeKey: string): string {
    switch(themeKey) {
      case 'contrast':
        return 'https://kendo.cdn.telerik.com/themes/8.2.1/default/default-ocean-blue.css';
      case 'dark':
        return 'https://kendo.cdn.telerik.com/themes/8.2.1/material/material-main-dark.css';
      default:
        return 'https://kendo.cdn.telerik.com/themes/8.2.1/default/default-turquoise.css';
    }
  }

  private getFontFamily(fontKey: string): string {
    switch(fontKey) {
      case 'legible':
        return `'Verdana', sans-serif`;
      case 'dyslexia':
        return `OpenDyslexic`;
      default:
        return `''Roboto', sans-serif'`;
    }
  }
}
