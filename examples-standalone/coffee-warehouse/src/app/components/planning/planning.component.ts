import { Component } from '@angular/core';
import { MessageService } from '@progress/kendo-angular-l10n';

import { CreateFormGroupArgs, EventStyleArgs, EditMode, KENDO_SCHEDULER } from '@progress/kendo-angular-scheduler';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { CustomMessagesService } from '../../services/custom-messages.service';
import { sampleData } from '../../resources/events';
import { teams } from '../../resources/teams';
import { Team } from '../../models/team.model';
import { Event } from '../../models/event.model';
import { Employee } from '../../models/employee.model';
import { CardComponent } from './cards/card.component';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-planning-component',
    templateUrl: './planning.component.html',
    imports: [KENDO_SCHEDULER, CardComponent, ReactiveFormsModule, KENDO_DATEINPUTS, KENDO_INPUTS, KENDO_LABELS, KENDO_DROPDOWNS, CommonModule]
})
export class PlanningComponent {
    public data: Event[];
    public selectedDate: Date = new Date('2013-06-27T00:00:00Z');
    public formGroup: FormGroup = new FormGroup({});
    public customMsgService: CustomMessagesService;
    public teams = teams;

    public events: Event[] = sampleData;

    constructor(public msgService: MessageService, private formBuilder: FormBuilder) {
        this.customMsgService = this.msgService as CustomMessagesService;
        this.createFormGroup = this.createFormGroup.bind(this);
        this.data = this.events.slice();
    }

    public toggleEvents(employee: Employee): void {
        this.data = [...this.filterEvents(employee.teamId, employee.selected)];
    }

    public filterEvents(id: number, selected: boolean): Event[] {
        const cloneData = this.data.slice();

        if (selected) {
            return cloneData.filter((event: Event) => event.teamID !== id);
        } else {
            return [...cloneData, ...this.events.filter((event: Event) => event.teamID === id)];
        }
    }

    public setEventStyles(args: EventStyleArgs): object {
        const currentTeam: Team | undefined = teams.find((team: Team) => team.teamID === args.event.dataItem.teamID);
        return { backgroundColor: currentTeam?.teamColor };
    }

    public createFormGroup(args: CreateFormGroupArgs): FormGroup {
        const dataItem = args.dataItem;
        const isOccurrence = args.mode === EditMode.Occurrence;
        const exceptions = isOccurrence ? [] : dataItem.recurrenceExceptions;

        this.formGroup = this.formBuilder.group({
            id: args.isNew ? this.getNextId() : dataItem.id,
            start: [dataItem.start],
            end: [dataItem.end],
            startTimezone: [dataItem.startTimezone],
            endTimezone: [dataItem.endTimezone],
            isAllDay: dataItem.isAllDay,
            title: dataItem.title,
            description: dataItem.description,
            recurrenceRule: dataItem.recurrenceRule,
            recurrenceId: dataItem.recurrenceId,
            recurrenceExceptions: [exceptions],
            teamID: dataItem.teamID
        });

        return this.formGroup;
    }

    public getNextId(): number {
        const len = this.events.length;
        return len === 0 ? 1 : this.events[this.events.length - 1].id + 1;
    }

    public isEditingSeries(editMode: EditMode): boolean {
        return editMode === EditMode.Series;
    }
}
