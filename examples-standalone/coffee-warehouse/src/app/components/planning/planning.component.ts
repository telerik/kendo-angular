import { Component, ViewEncapsulation } from '@angular/core';
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
                            <form class="k-form k-form-vertical" [formGroup]="formGroup">
                                <fieldset class="k-form-fieldset">
                                    <kendo-formfield orientation="vertical">
                                        <span>Title</span>
                                        <kendo-textbox placeholder="Title" [formControl]="formGroup.get('title')"></kendo-textbox>
                                    </kendo-formfield>

                                    <kendo-formfield orientation="vertical">
                                        <span>Start</span>
                                        <kendo-datetimepicker [popupSettings]="{ appendTo: 'root' }" [formControl]="formGroup.get('start')">
                                        </kendo-datetimepicker>
                                    </kendo-formfield>

                                    <kendo-formfield orientation="vertical">
                                        <span>End</span>
                                        <kendo-datetimepicker [popupSettings]="{ appendTo: 'root' }" [formControl]="formGroup.get('end')">
                                        </kendo-datetimepicker>
                                    </kendo-formfield>

                                    <kendo-formfield orientation="vertical">
                                        <span>Description</span>
                                        <kendo-textarea [rows]="5" placeholder="Description" [formControl]="formGroup.get('description')">
                                        </kendo-textarea>
                                    </kendo-formfield>

                                    <kendo-formfield orientation="vertical">
                                        <span>Team</span>
                                        <kendo-dropdownlist
                                            [data]="teams"
                                            [valuePrimitive]="true"
                                            valueField="teamID"
                                            textField="teamName"
                                            [formControl]="formGroup.get('id')"
                                        >
                                            <ng-template kendoDropDownListValueTemplate let-dataItem>
                                                <span class="k-team-mark" [ngStyle]="{ 'background-color': dataItem.teamColor }"></span
                                                >&nbsp;{{ dataItem?.teamName }}
                                            </ng-template>
                                            <ng-template kendoDropDownListItemTemplate let-dataItem>
                                                <span class="k-team-mark" [ngStyle]="{ 'background-color': dataItem.teamColor }"></span>
                                                {{ dataItem.teamName }}
                                            </ng-template>
                                        </kendo-dropdownlist>
                                    </kendo-formfield>
                                </fieldset>
                            </form>
                        </ng-template>
                    </kendo-scheduler>
                </div>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    styles: [
        `
            .k-team-mark {
                width: 1em;
                height: 1em;
                display: inline-block;
                vertical-align: middle;
                margin-right: 8px;
            }
        `
    ]
})
export class PlanningComponent {
    public data: SchedulerEvent[];
    public selectedDate: Date = new Date('2020-04-27T00:00:00Z');
    public formGroup: FormGroup;
    public customMsgService: CustomMessagesService;
    public teams = teams;

    public events: SchedulerEvent[] = orders.map((order: Order) => {
        return {
            id: order.teamID,
            title: order.customerContactName,
            start: new Date(order.requiredDateStart),
            end: new Date(order.requiredDateEnd),
            description: order.shipAddress
        };
    });

    constructor(public msgService: MessageService, private formBuilder: FormBuilder) {
        this.customMsgService = <CustomMessagesService>this.msgService;
        this.createFormGroup = this.createFormGroup.bind(this);
        this.data = this.events.slice();
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
        const dataItem = args.dataItem;
        this.formGroup = this.formBuilder.group({
            id: args.isNew ? this.getNextId() : dataItem.id,
            start: [dataItem.start],
            end: [dataItem.end],
            title: dataItem.title,
            description: dataItem.description
        });

        return this.formGroup;
    }

    public getNextId(): number {
        const len = this.events.length;
        return len === 0 ? 1 : this.events[this.events.length - 1].id + 1;
    }
}
