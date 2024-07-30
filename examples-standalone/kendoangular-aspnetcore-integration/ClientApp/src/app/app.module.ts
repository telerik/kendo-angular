import { APP_ID, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { UploadComponent } from "./upload/upload.component";

import { GridModule } from "@progress/kendo-angular-grid";
import { UploadsModule } from "@progress/kendo-angular-upload";
import { ProductService } from "./fetch-data/products.service";

function getBaseUrl() {
    return document.getElementsByTagName("base")[0].href;
}
@NgModule({
    declarations: [AppComponent, NavMenuComponent, HomeComponent, FetchDataComponent, UploadComponent],
    bootstrap: [AppComponent],
    imports: [
        // Deprecated
        // BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        BrowserAnimationsModule,
        FormsModule,
        GridModule,
        UploadsModule,
        RouterModule.forRoot([
            { path: "", component: HomeComponent, pathMatch: "full" },
            { path: "upload", component: UploadComponent },
            { path: "fetch-data", component: FetchDataComponent },
        ]),
    ],
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        ProductService,
        [{ provide: APP_ID, useValue: "ng-cli-universal" }],
        { provide: "BASE_URL", useFactory: getBaseUrl },
    ],
})
export class AppModule {}
