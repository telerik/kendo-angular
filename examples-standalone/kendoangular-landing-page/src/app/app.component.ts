import { Component, DestroyRef, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd } from '@angular/router';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { menuIcon, xIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, KENDO_BUTTONS, KENDO_ICONS],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    public menuOpen = false;
    public pageTitle = 'Overview';
    public readonly menuIcon: SVGIcon = menuIcon;
    public readonly closeIcon: SVGIcon = xIcon;

    private readonly router = inject(Router);
    private readonly destroyRef = inject(DestroyRef);

    constructor() {
        this.updatePageTitle();

        this.router.events
            .pipe(
                filter((event): event is NavigationEnd => event instanceof NavigationEnd),
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe(() => this.updatePageTitle());
    }

    public closeMenu(): void {
        this.menuOpen = false;
    }

    private updatePageTitle(): void {
        this.pageTitle = this.router.routerState.snapshot.root.firstChild?.title ?? 'Overview';
    }
}
