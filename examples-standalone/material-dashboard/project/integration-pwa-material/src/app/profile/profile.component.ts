import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from './../shared/github.service';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    encapsulation: ViewEncapsulation.None,
    providers: [GithubService],
    templateUrl: './profile.template.html',
    styles: [`
    .center{
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    .custom-width {
        width: 100%;
    }
    `]
})
export class ProfileComponent {
    public isLoading = true;
    public user: any = {};
    public profileDialogVisible = false;
    public deleteDialogVisible = false;

    constructor(public githubService: GithubService, private router: Router) {
        githubService.getGithubUser('mbechev').subscribe(data => {
            this.user = data;
            this.isLoading = false;
        }, (err) => {
            this.isLoading = false;
        });
    }

    public onProfileDialogClose() {
        this.profileDialogVisible = false;
    }

    private onSignOutClick() {
        this.router.navigate(['/signin']);
    }

    public onUpdateClick() {
        this.profileDialogVisible = true;
    }

    public onDeleteClick() {
        this.deleteDialogVisible = true;
    }

    public onDeleteDialogClose() {
        this.deleteDialogVisible = false;
    }
}
