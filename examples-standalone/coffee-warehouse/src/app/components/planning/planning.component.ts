import { Component } from '@angular/core';
import { MessageService } from '@progress/kendo-angular-l10n';
import { CustomMessagesService } from 'src/app/services/custom-messages.service';

import { SchedulerEvent, CreateFormGroupArgs, EditMode, EventStyleArgs } from '@progress/kendo-angular-scheduler';
import { FormGroup, FormBuilder } from '@angular/forms';

import { orders } from 'src/app/data/orders';
import { teams } from 'src/app/data/teams';
import { Order } from 'src/app/models/order.model';
import { Team } from 'src/app/models/team.model';
import { Employee } from 'src/app/models/employee.model';

@Component({
    selector: 'planning-component',
    template: `
        <div class="planning-page main-content">
            <div class="card-container grid">
                <h3 class="card-title">{{ customMsgService.translate('teamCalendar') }}</h3>
                <card-component class="card-component" (toggleEvents)="toggleEvents($event)"></card-component>
                <div class="card-component">
                    <kendo-scheduler
                        [kendoSchedulerBinding]="data"
                        [kendoSchedulerReactiveEditing]="createFormGroup"
                        [selectedDate]="selectedDate"
                        [selectedViewIndex]="1"
                        [timezone]="'Etc/UTC'"
                        style="height: 600px;"
                        startTime="08:00"
                        endTime="17:00"
                        [eventStyles]="setEventBg"
                    >
                        <kendo-scheduler-day-view> </kendo-scheduler-day-view>
                        <kendo-scheduler-work-week-view> </kendo-scheduler-work-week-view>
                        <kendo-scheduler-week-view> </kendo-scheduler-week-view>
                        <kendo-scheduler-month-view> </kendo-scheduler-month-view>

                        <ng-template
                            kendoSchedulerEditDialogTemplate
                            autoFocusedElement=".title-input"
                            let-formGroup="formGroup"
                            let-isNew="isNew"
                            let-editMode="editMode"
                        >
                            <div class="k-form-inline">
                                <div class="k-form-field">
                                    <span>Title</span>
                                    <input class="k-textbox title-input" placeholder="Title" [formControl]="formGroup.get('title')" />
                                </div>
                                <div class="k-form-field k-datetime-picker-wrapper">
                                    <span>Start</span>
                                    <kendo-datepicker [formControl]="formGroup.get('start')"> </kendo-datepicker>
                                    <kendo-timepicker [formControl]="formGroup.get('start')" *ngIf="!formGroup.controls.isAllDay.value">
                                    </kendo-timepicker>
                                </div>
                                <div class="k-form-field k-datetime-picker-wrapper">
                                    <span>End</span>
                                    <kendo-datepicker [formControl]="formGroup.get('end')"> </kendo-datepicker>
                                    <kendo-timepicker [formControl]="formGroup.get('end')" *ngIf="!formGroup.controls.isAllDay.value">
                                    </kendo-timepicker>
                                </div>
                                <div class="k-form-field">
                                    <input
                                        type="checkbox"
                                        id="k-is-allday-chkbox"
                                        class="k-checkbox"
                                        [formControl]="formGroup.get('isAllDay')"
                                    />
                                    <label class="k-checkbox-label" for="k-is-allday-chkbox">All Day Event</label>
                                </div>
                                <div class="k-form-field" *ngIf="isEditingSeries(editMode)">
                                    <kendo-recurrence-editor [formControl]="formGroup.get('recurrenceRule')"> </kendo-recurrence-editor>
                                </div>
                            </div>
                        </ng-template>
                    </kendo-scheduler>
                </div>
            </div>
        </div>
    `
})
export class PlanningComponent {
    public selectedDate: Date = new Date('2020-04-27T00:00:00Z');
    public formGroup: FormGroup;
    public events: SchedulerEvent[] = orders.map((order: Order) => {
        return {
            id: order.teamID,
            title: order.customerContactName,
            start: new Date(order.requiredDateStart),
            end: new Date(order.requiredDateEnd)
        };
    });

    public data: SchedulerEvent[] = this.events;

    public customMsgService: CustomMessagesService;

    constructor(public msgService: MessageService, private formBuilder: FormBuilder) {
        this.customMsgService = <CustomMessagesService>this.msgService;
        this.createFormGroup = this.createFormGroup.bind(this);
    }

    public toggleEvents(employee: Employee): void {
        this.data = [...this.filterEvents(employee.teamId, employee.selected)];
    }

    public filterEvents(id, selected): SchedulerEvent[] {
        let cloneData = this.data.slice();

        if (selected) {
            return cloneData.filter((event: SchedulerEvent) => event.id !== id);
        } else {
            return [...cloneData, ...this.events.filter((event: SchedulerEvent) => event.id === id)];
        }
    }

    public setEventBg(args: EventStyleArgs): Object {
        const team = teams.find((team: Team) => team.teamID === args.event.id);
        return { backgroundColor: team.teamColor };
    }

    public createFormGroup(args: CreateFormGroupArgs): FormGroup {
        // const dataItem = args.dataItem;
        // const isOccurrence = args.mode === EditMode.Occurrence;
        // const exceptions = isOccurrence ? [] : dataItem.recurrenceExceptions;

        // this.formGroup = this.formBuilder.group({
        //     id: args.isNew ? this.getNextId() : dataItem.id,
        //     start: [dataItem.start, Validators.required],
        //     end: [dataItem.end, Validators.required],
        //     startTimezone: [dataItem.startTimezone],
        //     endTimezone: [dataItem.endTimezone],
        //     isAllDay: dataItem.isAllDay,
        //     title: dataItem.title,
        //     description: dataItem.description,
        //     recurrenceRule: dataItem.recurrenceRule,
        //     recurrenceId: dataItem.recurrenceId,
        //     recurrenceExceptions: [exceptions]
        // });

        return this.formGroup;
    }

    public isEditingSeries(editMode: EditMode): boolean {
        return editMode === EditMode.Series;
    }

    public getNextId(): number {
        const len = this.events.length;

        return len === 0 ? 1 : this.events[this.events.length - 1].id + 1;
    }
}
