import { Component } from "@angular/core";
import { MessageService } from "@progress/kendo-angular-l10n";
import { CustomMessagesService } from "./services/custom-messages.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  public selected = "Team";
  public items: Array<any> = [];
  public customMsgService: CustomMessagesService;
  public mini = true;

  constructor(public msgService: MessageService) {
    this.customMsgService = this.msgService as CustomMessagesService;
  }
}
