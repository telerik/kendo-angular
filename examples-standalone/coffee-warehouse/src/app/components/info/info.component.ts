import { AfterViewInit, Component } from '@angular/core';
import { MessageService } from '@progress/kendo-angular-l10n';
import { CustomMessagesService } from '../../services/custom-messages.service';
import { SettingsService } from '../../settings.service';
import { isPresent } from '@progress/kendo-angular-common';

@Component({
    selector: 'app-info-component',
    templateUrl: './info.component.html'
})
export class InfoComponent implements AfterViewInit {
    public customMsgService: CustomMessagesService;
    public set pauseAnimation(value: boolean) {
        this._pauseAnimation = value;

        if (!isPresent(this.videoElement)) { return; }
        value ? this.videoElement.pause() : this.videoElement.play();
    }

    public ngAfterViewInit(): void {
        this.videoElement = document.getElementById('video') as HTMLVideoElement;
    }

    private _pauseAnimation = false;
    private videoElement: HTMLVideoElement;

    constructor(public msgService: MessageService, private settingsService: SettingsService) {
        this.customMsgService = this.msgService as CustomMessagesService;

        this.settingsService.changes.subscribe(settings => {
            if (settings.pauseAnimations !== this._pauseAnimation) {
                this.pauseAnimation = settings.pauseAnimations;
            }
        });
    }
}
