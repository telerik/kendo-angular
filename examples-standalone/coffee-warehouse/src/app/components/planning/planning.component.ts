import { Component, ViewEncapsulation } from '@angular/core';
import { MessageService } from '@progress/kendo-angular-l10n';
import { CustomMessagesService } from 'src/app/services/custom-messages.service';

import { CreateFormGroupArgs, EventStyleArgs, EditMode } from '@progress/kendo-angular-scheduler';
import { FormGroup, FormBuilder } from '@angular/forms';

import { sampleData } from 'src/app/resources/events';
import { teams } from 'src/app/resources/teams';
import { Team } from 'src/app/models/team.model';
import { Employee } from 'src/app/models/employee.model';
import { Event } from 'src/app/models/event.model';

@Component({
    selector: 'planning-component',
    templateUrl: './planning.component.html',
    styleUrls: ['./planning.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PlanningComponent {
    public data: Event[];
    public selectedDate: Date = new Date('2013-06-27T00:00:00Z');
    public formGroup: FormGroup;
    public customMsgService: CustomMessagesService;
    public teams = teams;

    public events: Event[] = sampleData;

    constructor(public msgService: MessageService, private formBuilder: FormBuilder) {
        this.customMsgService = <CustomMessagesService>this.msgService;
        this.createFormGroup = this.createFormGroup.bind(this);
        this.data = this.events.slice();
    }

    public toggleEvents(employee: Employee): void {
        this.data = [...this.filterEvents(employee.teamId, employee.selected)];
    }

    public filterEvents(id, selected): Event[] {
        let cloneData = this.data.slice();

        if (selected) {
            return cloneData.filter((event: Event) => event.teamID !== id);
        } else {
            return [...cloneData, ...this.events.filter((event: Event) => event.teamID === id)];
        }
    }

    public setEventStyles(args: EventStyleArgs): Object {
        const team = teams.find((team: Team) => team.teamID === args.event.dataItem.teamID);
        return { backgroundColor: team.teamColor };
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
