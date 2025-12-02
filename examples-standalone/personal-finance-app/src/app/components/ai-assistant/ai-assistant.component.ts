import { Component, Inject, LOCALE_ID } from '@angular/core';
import { guid } from '@progress/kendo-angular-common';
import { KENDO_CONVERSATIONALUI, PromptOutput, PromptRequestEvent } from '@progress/kendo-angular-conversational-ui';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { MessageService } from '@progress/kendo-angular-l10n';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import {
    defaultResponseDe,
    defaultResponseEn,
    defaultResponseEs,
    defaultResponseFr,
    promptDataDe,
    promptDataEn,
    promptDataEs,
    promptDataFr,
} from '../../data/prompt-data';
import {
    relatedTopicsDataDe,
    relatedTopicsDataEn,
    relatedTopicsDataEs,
    relatedTopicsDataFr,
} from '../../data/related-topics-data';
import { CustomMessagesService } from '../../services/custom-messages.service';

@Component({
    selector: 'app-ai-assistant',
    imports: [KENDO_LAYOUT, KENDO_CONVERSATIONALUI, KENDO_LABELS, KENDO_INPUTS],
    templateUrl: './ai-assistant.component.html',
    styleUrl: './ai-assistant.component.css',
})
export class AiAssistantComponent {
    public customMsgService: CustomMessagesService;

    public relatedTopics: {
        title: string;
        description: string;
        expanded: boolean;
    }[] = [];
    public promptSuggestions: string[] = [];
    public activeView: number = 0;
    public promptOutputs: PromptOutput[] = [];
    public emailContent = '';

    private currentLocaleId: string = 'en-US';
    private defaultMessage = '';
    private promptData: { suggestion: string; answer: string }[] = [];

    constructor(private messages: MessageService, @Inject(LOCALE_ID) public localeId: string) {
        this.customMsgService = this.messages as CustomMessagesService;

        this.promptSuggestions = this.getPromptSuggestions(this.customMsgService.language);
        this.defaultMessage = this.getDefaultMessage(this.customMsgService.language);
        this.promptData = this.getPrompts(this.customMsgService.language);
        this.relatedTopics = this.getRelatedTopics(this.customMsgService.language);

        this.customMsgService.localeChange.subscribe(() => {
            this.currentLocaleId = this.customMsgService.language;

            this.promptSuggestions = this.getPromptSuggestions(this.currentLocaleId);
            this.defaultMessage = this.getDefaultMessage(this.currentLocaleId);
            this.promptData = this.getPrompts(this.currentLocaleId);
            this.relatedTopics = this.getRelatedTopics(this.currentLocaleId);
        });
    }

    public onPromptRequest(ev: PromptRequestEvent): void {
        const response = this.promptData.slice().find((s) => s.suggestion === ev.prompt);

        const output: PromptOutput = {
            id: guid(),
            title: ev.prompt,
            output: response?.answer || this.defaultMessage,
            prompt: ev.prompt,
            isRetry: ev.isRetry,
        };

        this.promptOutputs.unshift(output);
        this.activeView = 1;

        if (response) {
            this.emailContent = response.answer;
        }
    }

    private getPromptSuggestions(localeId: string): string[] {
        switch (localeId) {
            case 'en-US':
                return promptDataEn.map((s) => s.suggestion);
            case 'es-ES':
                return promptDataEs.map((s) => s.suggestion);
            case 'de-DE':
                return promptDataDe.map((s) => s.suggestion);
            case 'fr-FR':
                return promptDataFr.map((s) => s.suggestion);
            default:
                return promptDataEn.map((s) => s.suggestion);
        }
    }

    private getDefaultMessage(localeId: string): string {
        switch (localeId) {
            case 'en-US':
                return defaultResponseEn;
            case 'es-ES':
                return defaultResponseEs;
            case 'de-DE':
                return defaultResponseDe;
            case 'fr-FR':
                return defaultResponseFr;
            default:
                return defaultResponseEn;
        }
    }

    private getPrompts(localeId: string): { suggestion: string; answer: string }[] {
        switch (localeId) {
            case 'en-US':
                return promptDataEn;
            case 'es-ES':
                return promptDataEs;
            case 'de-DE':
                return promptDataDe;
            case 'fr-FR':
                return promptDataFr;
            default:
                return promptDataEn;
        }
    }

    private getRelatedTopics(localeId: string): { title: string; description: string; expanded: boolean }[] {
        switch (localeId) {
            case 'en-US':
                return relatedTopicsDataEn;
            case 'es-ES':
                return relatedTopicsDataEs;
            case 'de-DE':
                return relatedTopicsDataDe;
            case 'fr-FR':
                return relatedTopicsDataFr;
            default:
                return relatedTopicsDataEn;
        }
    }
}
