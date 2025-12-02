import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { guid } from '@progress/kendo-angular-common';
import {
    KENDO_CONVERSATIONALUI,
    Message,
    PromptOutput,
    PromptRequestEvent,
    SendMessageEvent,
    User,
} from '@progress/kendo-angular-conversational-ui';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { from, merge, Observable, Subject } from 'rxjs';
import { map, scan } from 'rxjs/operators';
import { defaultResponse, promptData } from '../../data/ai-prompt-data';
import { ChatService } from './chat.service';

@Component({
    selector: 'app-conversational-ui',
    imports: [CommonModule, KENDO_CONVERSATIONALUI, KENDO_BUTTONS, KENDO_INPUTS, KENDO_LAYOUT],
    providers: [ChatService],
    templateUrl: './conversational-ui.component.html',
    styleUrl: './conversational-ui.component.css',
})
export class ConversationalUiComponent {
    public feed: Observable<Message[]>;
    public promptOutputs: PromptOutput[] = [];
    public activeView: number = 0;
    public readonly user: User = {
        id: 1,
    };
    public readonly bot: User = {
        id: 0,
    };
    public promptSuggestions = promptData.map((s) => s.suggestion);

    private local: Subject<Message> = new Subject<Message>();

    constructor(private svc: ChatService) {
        const hello: Message = {
            id: guid(),
            author: this.bot,
            suggestedActions: [
                {
                    type: 'reply',
                    value: 'Neat!',
                },
                {
                    type: 'reply',
                    value: 'Thanks, but this is boring.',
                },
            ],
            timestamp: new Date(),
            text: 'Hello, this is a demo bot. I don`t do much, but I can count symbols!',
        };

        this.feed = merge(
            from([hello]),
            this.local,
            this.svc.responses.pipe(
                map(
                    (response): Message => ({
                        id: guid(),
                        author: this.bot,
                        text: response,
                    })
                )
            )
        ).pipe(scan((acc: Message[], x: Message) => [...acc, x], []));
    }

    public sendMessage(e: SendMessageEvent): void {
        this.local.next(e.message);

        this.local.next({
            id: guid(),
            author: this.bot,
            typing: true,
        });

        if (e.message.text !== undefined) {
            this.svc.submit(e.message.text);
        }
    }

    public onPromptRequest(ev: PromptRequestEvent): void {
        if (!ev.prompt) {
            return;
        }
        this.createPromptOutput(ev);
        this.activeView = 1;
    }

    private createPromptOutput(ev: PromptRequestEvent): void {
        const response = promptData.find((s) => s.suggestion === ev.prompt);

        const output: PromptOutput = {
            id: guid(),
            title: ev.prompt,
            output: response?.response || defaultResponse,
            prompt: ev.prompt,
            isRetry: ev.isRetry,
        };

        this.promptOutputs.unshift(output);
        this.activeView = 1;
    }
}
