import { Component, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { EditMode } from '@progress/kendo-angular-scheduler';

@Component({
    selector: 'scheduler-edit-form',
    encapsulation: ViewEncapsulation.None,
    styles: [`
        #eventForm {
            max-width: 600px;
        }

        #eventForm .k-datetime-picker-wrapper .k-widget {
            display: inline-block;
            width: 150px;
            margin-right: 15px;
        }

        #eventForm .k-edit-label { width: 17%; }
        #eventForm .k-edit-field { width: 77%; }
    `],
    template: `
        <div *ngIf="active" class="card">
            <form novalidate [formGroup]="editForm" class="k-form-inline" id="eventForm">
                <fieldset>
                    <legend>{{ isNew ? 'Add New Event' : 'Edit Event' }}</legend>

                    <div class="k-form-field">
                        <span>Title</span>
                        <input class="k-textbox" placeholder="Title" formControlName="Title" />
                    </div>
                    <div class="k-form-field k-datetime-picker-wrapper">
                        <span>Start</span>
                        <kendo-datepicker formControlName="Start">
                        </kendo-datepicker>
                        <kendo-timepicker formControlName="Start" *ngIf='!editForm.controls.IsAllDay.value'>
                        </kendo-timepicker>
                    </div>
                    <div class="k-form-field k-datetime-picker-wrapper">
                        <span>End</span>
                        <kendo-datepicker formControlName="End">
                        </kendo-datepicker>
                        <kendo-timepicker formControlName="End" *ngIf='!editForm.controls.IsAllDay.value'>
                        </kendo-timepicker>
                    </div>
                    <div class="k-form-field">
                        <input type='checkbox' id='k-is-allday-chkbox' class='k-checkbox' formControlName='IsAllDay' />
                        <label class='k-checkbox-label' for='k-is-allday-chkbox'>All Day Event</label>
                    </div>
                    <div>
                        <kendo-recurrence-editor *ngIf="isEditingSeries" formControlName='RecurrenceRule'>
                        </kendo-recurrence-editor>
                    </div>
                </fieldset>
                <div class="text-right">
                    <button kendoButton (click)="onCancel($event)">Cancel</button>
                    <button kendoButton (click)="onSave($event)" [disabled]="!editForm.valid" [primary]="true">Save</button>
                </div>
            </form>
        </div>
    `
})
export class SchedulerEditFormComponent {
    @Input()
    public isNew = false;

    @Input()
    public editMode: EditMode;

    @Input()
    public set event(ev: any) {
        if (ev !== undefined) {
            this.editForm.reset(ev);
            this.active = true;
        }
    }

    @Output()
    public cancel: EventEmitter<any> = new EventEmitter();

    @Output()
    public save: EventEmitter<any> = new EventEmitter();

    public active = false;

    public editForm = new FormGroup({
        'Title': new FormControl('', Validators.required),
        'Start': new FormControl('', Validators.required),
        'End': new FormControl('', Validators.required),
        'IsAllDay': new FormControl(false),
        'RecurrenceRule': new FormControl(),
        'RecurrenceID': new FormControl()
    });

    public get isEditingSeries(): boolean {
        return this.editMode === EditMode.Series;
    }

    constructor(public formBuilder: FormBuilder) {}

    public onSave(e: MouseEvent): void {
        e.preventDefault();
        this.active = false;

        this.save.emit(this.editForm.value);
    }

    public onCancel(e: MouseEvent): void {
        e.preventDefault();
        this.active = false;

        this.cancel.emit();
    }
}
