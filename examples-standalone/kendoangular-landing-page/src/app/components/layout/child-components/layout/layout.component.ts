import { Component, Input, ViewEncapsulation } from "@angular/core";

import { ExpansionpanelComponent } from "../expansionpanel/expansionpanel.component";
import { GridlayoutComponent } from "../gridlayout/gridlayout.component";
import { PanelbarComponent } from "../panelbar/panelbar.component";
import { SplitterComponent } from "../splitter/splitter.component";
import { StacklayoutComponent } from "../stacklayout/stacklayout.component";
import { StepperComponent } from "../stepper/stepper.component";
import { TilelayoutComponent } from "../tilelayout/tilelayout.component";
import { TimelineComponent } from "../timeline/timeline.component";
import { TabstripComponent } from "../tabstrip/tabstrip.component";
import { CardComponent } from "../card/card.component";
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
    selector: "layout-component",
    imports: [
        AvatarComponent,
        CardComponent,
        ExpansionpanelComponent,
        GridlayoutComponent,
        PanelbarComponent,
        SplitterComponent,
        StacklayoutComponent,
        StepperComponent,
        TabstripComponent,
        TilelayoutComponent,
        TimelineComponent,
    ],
    encapsulation: ViewEncapsulation.None,
    templateUrl: "./layout.component.html",
    styleUrl: "./layout.component.css",
})
export class LayoutComponent {
    @Input() public selectedItem!: string;
}
