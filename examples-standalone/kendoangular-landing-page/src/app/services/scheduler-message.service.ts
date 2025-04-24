import { Injectable } from "@angular/core";
import { MessageService } from "@progress/kendo-angular-l10n";

interface LocalizationData {
    rtl: boolean;
    messages: { [key: string]: string };
}

const localizationData: { [key: string]: LocalizationData } = {
    en: {
        rtl: false,
        messages: {
            "kendo.scheduler.today": "Today",
            "kendo.scheduler.allDay": "All day",
            "kendo.scheduler.showWorkDay": "Show business hours",
            "kendo.scheduler.showFullDay": "Show full day",
            "kendo.scheduler.agendaViewTitle": "Agenda",
            "kendo.scheduler.dayViewTitle": "Day",
            "kendo.scheduler.weekViewTitle": "Week",
            "kendo.scheduler.workWeekViewTitle": "Work Week",
            "kendo.scheduler.monthViewTitle": "Month",
        },
    },
    es: {
        rtl: false,
        messages: {
            "kendo.scheduler.today": "Hoy",
            "kendo.scheduler.allDay": "todo el dia",
            "kendo.scheduler.showWorkDay": "Mostrar horas laborables",
            "kendo.scheduler.showFullDay": "Mostrar día completo",
            "kendo.scheduler.agendaViewTitle": "Agenda",
            "kendo.scheduler.dayViewTitle": "Día",
            "kendo.scheduler.weekViewTitle": "Semana",
            "kendo.scheduler.workWeekViewTitle": "Semana laboral",
            "kendo.scheduler.monthViewTitle": "Mes",
        },
    },
};

@Injectable({
    providedIn: "root",
})
export class SchedulerMessageService extends MessageService {
    public set language(value: string) {
        const lang = localizationData[value];

        if (lang) {
            this.localeId = value;
            this.notify(lang.rtl);
        }
    }

    public get language(): string {
        return this.localeId;
    }

    private localeId = "en";

    constructor() {
        super();
    }

    private get messages(): { [key: string]: string } {
        const lang = localizationData[this.localeId];

        if (lang) {
            return lang.messages;
        }
        return {};
    }

    public override get(key: string): string {
        const messages = this.messages;
        return messages ? messages[key] : "";
    }
}
