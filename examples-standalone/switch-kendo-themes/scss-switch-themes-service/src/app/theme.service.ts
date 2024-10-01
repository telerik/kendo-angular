import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ThemeService {
    public theme: string = "default-theme";
    constructor(@Inject(DOCUMENT) private document: Document) {}

    public switchTheme(): void {
        let themeLink = this.document.getElementById("app-theme") as HTMLLinkElement;

        if (this.theme === "dark-theme") {
            this.theme = "light-theme";
            themeLink.href = "light-theme" + ".css";
            return;
        }
        themeLink.href = "dark-theme" + ".css";
        this.theme = "dark-theme";
    }
}
