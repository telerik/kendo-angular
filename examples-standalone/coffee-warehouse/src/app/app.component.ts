import { Component, HostListener, OnInit } from "@angular/core";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { MessageService } from "@progress/kendo-angular-l10n";
import {
  DrawerComponent,
  DrawerMode,
  DrawerSelectEvent,
  KENDO_LAYOUT,
} from "@progress/kendo-angular-layout";
import { CustomMessagesService } from "./services/custom-messages.service";
import { gridIcon, chartLineMarkersIcon, calendarIcon, userIcon, infoCircleIcon } from "@progress/kendo-svg-icons";
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    imports: [KENDO_LAYOUT, RouterOutlet, HeaderComponent]
})
export class AppComponent implements OnInit {
  public selected = "Team";
  public items: Array<any> = [];
  public customMsgService: CustomMessagesService;
  public mode: DrawerMode = "push";
  public mini = true;

  constructor(private router: Router, public msgService: MessageService) {
    this.customMsgService = this.msgService as CustomMessagesService;
  }

  ngOnInit() {
    // Update Drawer selected state when change router path
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.items = this.drawerItems(route.urlAfterRedirects);
        this.selected = this.items.find((item) => item.selected)?.text ?? "";
      }
    });

    this.setDrawerConfig();
    this.items = this.drawerItems(this.router.url);
    this.selected = this.items.find((item) => item.selected)?.text ?? "";

    this.customMsgService.localeChange.subscribe(() => {
      this.items = this.drawerItems(this.router.url);
    });

  }

  @HostListener("window:resize")
  public setDrawerConfig() {
    const pageWidth = window.innerWidth;
    if (pageWidth < 768) {
      this.mode = "overlay";
      this.mini = false;
    } else {
      this.mode = "push";
      this.mini = true;
    }
  }

  public drawerItems(activePath = this.router.url) {
    return [
      {
        text: this.customMsgService.translate("team"),
        svgIcon: gridIcon,
        path: "/",
        selected: activePath === "/",
      },
      {
        text: this.customMsgService.translate("dashboard"),
        svgIcon: chartLineMarkersIcon,
        path: "/dashboard",
        selected: activePath === "/dashboard",
      },
      {
        text: this.customMsgService.translate("planning"),
        svgIcon: calendarIcon,
        path: "/planning",
        selected: activePath === "/planning",
      },
      {
        text: this.customMsgService.translate("profile"),
        svgIcon: userIcon,
        path: "/profile",
        selected: activePath === "/profile",
      },
      { separator: true },
      {
        text: this.customMsgService.translate("info"),
        svgIcon: infoCircleIcon,
        path: "/info",
        selected: activePath === "/info",
      },
    ];
  }

  public toggleDrawer(drawer: DrawerComponent): void {
    drawer.toggle();
  }

  public onSelect(ev: DrawerSelectEvent): void {
    this.router.navigate([ev.item.path]);
  }
}
