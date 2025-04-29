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
            "kendo.scheduler.agendaViewTitle": "Agenda",
            "kendo.scheduler.allDay": "todo el día",
            "kendo.scheduler.allEvents": "Todos los eventos",
            "kendo.scheduler.calendarToday": "Hoy",
            "kendo.scheduler.cancel": "Cancelar",
            "kendo.scheduler.save": "Save",
            "kendo.scheduler.editorEventTitle": "Título",
            "kendo.scheduler.editorEventStart": "Inicio",
            "kendo.scheduler.editorEventStartTimeZone": "Zona horaria de inicio",
            "kendo.scheduler.editorEventEnd": "Fin",
            "kendo.scheduler.editorEventEndTimeZone": "Zona horaria final",
            "kendo.scheduler.dateHeader": "Fecha",
            "kendo.scheduler.dayViewTitle": "Título",
            "kendo.scheduler.deleteConfirmation": "¿Está seguro que quiere eliminar este evento?",
            "kendo.scheduler.deleteDialogTitle": "Eliminar evento",
            "kendo.scheduler.deleteOccurrence": "Delete current occurrence",
            "kendo.scheduler.deleteRecurringConfirmation":
                "Do you want to delete only this event occurrence or the whole series?",
            "kendo.scheduler.deleteRecurringDialogTitle":
                "¿Quiere eliminar esta ocurrencia del evento o la serie completa?",
            "kendo.scheduler.deleteSeries": "Eliminar la serie",
            "kendo.scheduler.deleteTitle": "Eliminar evento",
            "kendo.scheduler.destroy": "Eliminar",
            "kendo.scheduler.editOccurrence": "Editar ocurrencia actual",
            "kendo.scheduler.editorEventAllDay": "Todo el día",
            "kendo.scheduler.editorEventDescription": "Descripción",
            "kendo.scheduler.editorEventSeparateTimeZones": "Usar zonas horarias separadas para el inicio y el fin",
            "kendo.scheduler.editorEventTimeZone": "Zona horaria de fin",
            "kendo.scheduler.editorTitle": "Título",
            "kendo.scheduler.editRecurringConfirmation":
                "¿Quiere editar esta ocurrencia del evento o la serie completa?",
            "kendo.scheduler.editRecurringDialogTitle": "Editar elemento recurrente",
            "kendo.scheduler.editSeries": "Editar la serie",
            "kendo.scheduler.eventHeader": "Evento",
            "kendo.scheduler.monthViewTitle": "Mes",
            "kendo.scheduler.multiDayViewTitle": "Multi-Day",
            "kendo.scheduler.nextTitle": "Siguiente",
            "kendo.scheduler.previousTitle": "Anterior",
            "kendo.scheduler.recurrenceEditorDailyInterval": "día(s)",
            "kendo.scheduler.recurrenceEditorDailyRepeatEvery": "Repetir cada:",
            "kendo.scheduler.recurrenceEditorEndAfter": "Después",
            "kendo.scheduler.recurrenceEditorEndLabel": "Fin",
            "kendo.scheduler.recurrenceEditorEndNever": "Nunca",
            "kendo.scheduler.recurrenceEditorEndOccurrence": "ocurrencia(s)",
            "kendo.scheduler.recurrenceEditorEndOn": "On",
            "kendo.scheduler.recurrenceEditorFrequenciesDaily": "Diariamente",
            "kendo.scheduler.recurrenceEditorFrequenciesMonthly": "Mensualmente",
            "kendo.scheduler.recurrenceEditorFrequenciesNever": "Nunca",
            "kendo.scheduler.recurrenceEditorFrequenciesWeekly": "Semanalmente",
            "kendo.scheduler.recurrenceEditorFrequenciesYearly": "Anualmente",
            "kendo.scheduler.recurrenceEditorMonthlyDay": "Día",
            "kendo.scheduler.recurrenceEditorMonthlyInterval": "mes(es)",
            "kendo.scheduler.recurrenceEditorMonthlyRepeatEvery": "Repetir cada:",
            "kendo.scheduler.recurrenceEditorMonthlyRepeatOn": "Repetir en:",
            "kendo.scheduler.recurrenceEditorOffsetPositionsFirst": "primero",
            "kendo.scheduler.recurrenceEditorOffsetPositionsFourth": "cuarto",
            "kendo.scheduler.recurrenceEditorOffsetPositionsLast": "último",
            "kendo.scheduler.recurrenceEditorOffsetPositionsSecond": "segundo",
            "kendo.scheduler.recurrenceEditorOffsetPositionsThird": "tercero",
            "kendo.scheduler.recurrenceEditorRepeat": "Repetir",
            "kendo.scheduler.recurrenceEditorWeekdaysDay": "día",
            "kendo.scheduler.recurrenceEditorWeekdaysWeekday": "día de semana",
            "kendo.scheduler.recurrenceEditorWeekdaysWeekendday": "Día de fin de semana",
            "kendo.scheduler.recurrenceEditorWeeklyInterval": "semana(s)",
            "kendo.scheduler.recurrenceEditorWeeklyRepeatEvery": "Repetir cada:",
            "kendo.scheduler.recurrenceEditorWeeklyRepeatOn": "Repetir en:",
            "kendo.scheduler.recurrenceEditorYearlyInterval": "año(s)",
            "kendo.scheduler.recurrenceEditorYearlyOf": "de",
            "kendo.scheduler.recurrenceEditorYearlyRepeatEvery": "Repetir cada:",
            "kendo.scheduler.recurrenceEditorYearlyRepeatOn": "Repetir en:",
            "kendo.scheduler.showFullDay": "Mostrar día completo",
            "kendo.scheduler.showWorkDay": "Mostrar horas laborables",
            "kendo.scheduler.timeHeader": "Hora",
            "kendo.scheduler.timelineMonthViewTitle": "Timeline Month",
            "kendo.scheduler.timelineViewTitle": "Línea de tiempo",
            "kendo.scheduler.timelineWeekViewTitle": "Timeline Week",
            "kendo.scheduler.today": "Hoy",
            "kendo.scheduler.weekViewTitle": "Semana",
            "kendo.scheduler.workWeekViewTitle": "Semana laboral",
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
