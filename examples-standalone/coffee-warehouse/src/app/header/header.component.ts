import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { MessageService } from '@progress/kendo-angular-l10n';
import { CustomMessageService } from './../services/message.service';

@Component({
    selector: 'header-component',
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="header header-bg">
            <div class="nav-container">
                <div class="menu-button">
                    <span class="k-icon hamburger-icon" (click)="onButtonClick()"></span>
                </div>

                <div class="title">
                    <h1>Coffee Warehouse</h1>
                    <span class="vl"></span>
                    <h2></h2>
                </div>

                <div class="settings">
                    <span>Language</span>
                    <kendo-dropdownlist
                        [data]="languages"
                        textField="text"
                        valueField="lang"
                        [value]="selectedLang"
                        (valueChange)="changeLanguage($event)"
                    >
                    </kendo-dropdownlist>
                </div>
            </div>
        </div>
    `
})
export class HeaderComponent {
    @Output() public toggle = new EventEmitter();
    @Input() public selectedPage: string;

    public selectedLang = { text: 'English', lang: 'en-US' };
    public languages = [
        { text: 'English', lang: 'en-US' },
        { text: 'French', lang: 'fr' },
        { text: 'Spanish', lang: 'es' }
    ];

    // constructor(public messages: MessageService) {}

    public changeLanguage(item) {
        // const svc = <CustomMessageService>this.messages;
        // svc.language = item.lang;
    }

    public onButtonClick() {
        this.toggle.emit();
    }
}
