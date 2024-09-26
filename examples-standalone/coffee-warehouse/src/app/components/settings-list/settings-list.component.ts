import { Component, ViewChild } from '@angular/core';
import { defaultFont, SettingsService } from '../../settings.service';
import { groupBy } from '@progress/kendo-data-query';
import { SVGIcon, arrowRotateCcwIcon, fontFamilyIcon, imageResizeIcon, pauseSmIcon, underlineIcon } from '@progress/kendo-svg-icons';
import { contrastIcon, darkModeIcon, dyslexiaFontIcon, microphoneIcon } from './svg-icons';
import { Subscription } from 'rxjs';
import { ComboBoxComponent } from '@progress/kendo-angular-dropdowns';
import { IWindow } from '../../models/window.model';
import { OpenAIService } from '../../openai.service';

@Component({
    selector: 'app-settings-list-component',
    templateUrl: './settings-list.component.html'
})
export class SettingsListComponent {
    public settingsExpanded = false;
    public settings: any;
    public comboboxValue = null;

    public disabilitiesData: any[] = groupBy([{
            type: 'Visual Impairments',
            text: 'Low Vision'
        }, {
            type: 'Visual Impairments',
            text: 'Colour Blindness'
        }, {
            type: 'Visual Impairments',
            text: 'Blindness'
        }, {
            type: 'Hearing Impairments',
            text: 'Deafness'
        }, {
            type: 'Hearing Impairments',
            text: 'Hard of Hearing'
        }, {
            type: 'Motor Impairments',
            text: 'Limited Mobility'
        }, {
            type: 'Motor Impairments',
            text: 'Tremors'
        }, {
            type: 'Cognitive Disabilities',
            text: 'Dyslexia'
        }, {
            type: 'Cognitive Disabilities',
            text: 'ADHD'
        }], [{field: 'type'}]);

    private isDisabilitySupported(disability: string): boolean {
        const supportedDisabilities = this.disabilitiesData.flatMap(group => group.items.map(item => item.text));
        return supportedDisabilities.includes(disability);
    };

    public recognition: any;

    public resetIcon: SVGIcon = arrowRotateCcwIcon;
    public darkModeIcon: SVGIcon = darkModeIcon;
    public microphoneIcon: SVGIcon = microphoneIcon;
    public contrastIcon: SVGIcon = contrastIcon;
    public fontIcon: SVGIcon = fontFamilyIcon;
    public underlineIcon: SVGIcon = underlineIcon;
    public pauseIcon: SVGIcon = pauseSmIcon;
    public resizeIcon: SVGIcon = imageResizeIcon;
    public dyslexiaFontIcon: SVGIcon = dyslexiaFontIcon;
    public defaultFont = defaultFont;

    @ViewChild(ComboBoxComponent) private combo: ComboBoxComponent;
    private subs: Subscription = new Subscription();

    constructor(
        private settingsService: SettingsService,
        private openAIService: OpenAIService) { }

    public ngAfterViewInit(): void {
        // Using a custom window interface as some of the speech recognition classes not showing up
        const myWindow: IWindow = window as any;

        const SpeechRecognition = myWindow.SpeechRecognition || myWindow.webkitSpeechRecognition;

        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.lang = 'en-US';
        this.recognition.interimResults = false;

        this.recognition.onresult = (event: any) => {
            console.log("Speech Recognition end");

            const transcript: string = event.results[0][0].transcript;
            console.log(`Result received: ${transcript}`)

            const filtered: any = Array.from(event.results).filter(
                (r: any) => r.isFinal && r[0].confidence > 0.9
            );
            if (filtered.length != 0) {
                this.combo.searchbar.handleInput({
                    target: { value: transcript},
                });
                this.combo.selectClick();
                this.combo.togglePopup(false);
            }
        };
    }

    public getSetting(prop: string): any {
        return this.settingsService.settings[prop];
    }

    public settingChange(changes: any): void {
        this.settingsService.notifySettingChange(changes);
    }

    public resetSettings(): void {
        this.settingsService.resetSettings();
        this.combo.reset();
    }

    async applyAIRecommendedSettings(value: string) {
        if (!this.isDisabilitySupported(value)) {
        console.log(`Disability "${value}" is not supported. Skipping AI call.`);
        return;
        }
        // reset old selected disability settings before applying new
        this.settingsService.resetSettings();
        let settings = await this.openAIService.getAIRecommendedSettings(value);
        // let settings = `{"colorTheme": "contrast", "underlineLinks": true}`;
        settings = JSON.parse(settings); // parse JSON string into object

        for (const [setting, settingValue] of Object.entries(settings)) {
            const settingObj = { [setting]: settingValue };
            console.log(`setting: ${setting}`);
            console.log(`settingValue: ${settingValue}`);
            this.settingChange(settingObj);
        }
        this.settingsExpanded = true;
    }

        public activateSpeech() {
        this.recognition.start();
        console.log("Speech Recognition start");
    }
}
