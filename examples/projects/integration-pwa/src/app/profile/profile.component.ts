import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from './../shared/github.service';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { Router } from '@angular/router';

@Component({
    selector: 'profile',
    encapsulation: ViewEncapsulation.None,
    providers: [GithubService],
    templateUrl: './profile.template.html',
    styles: [`
    .center{
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    `]
})
export class ProfileComponent {
    public isLoading: boolean = true;
    public user: any = {};
    private profileDialogVisible = false;
    private deleteDialogVisible = false;

    constructor(public githubService: GithubService, private router: Router) {
        githubService.getGithubUser('ggkrustev').subscribe(data => {
            this.user = data;
            this.isLoading = false;
        }, (err)=>{
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
