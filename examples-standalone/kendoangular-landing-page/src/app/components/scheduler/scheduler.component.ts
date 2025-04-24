import { Component, OnInit } from '@angular/core';
import { SchedulerEvent, CreateFormGroupArgs, KENDO_SCHEDULER } from '@progress/kendo-angular-scheduler';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { sampleDataWithCustomSchema, displayDate, customModelFields } from './scheduler-data';
import { KENDO_TOOLBAR } from '@progress/kendo-angular-toolbar';

@Component({
  selector: 'app-scheduler',
  standalone: true,
    imports: [KENDO_SCHEDULER, KENDO_TOOLBAR, ReactiveFormsModule],
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
  public selectedDate: Date = displayDate;
  public events: any[] = [];
  public currentView: string = 'day';
  public modelFields = customModelFields;
  public orientation: 'horizontal' | 'vertical' = 'horizontal';
  public formGroup!: FormGroup;
  public group: any = { resources: ['Rooms', 'Persons'] }
  
  public resources = [
    {
      name: 'Rooms',
      data: [
        { text: 'Meeting Room 101', value: 1 , color: "#5392E4"},
        { text: 'Meeting Room 201', value: 2, color: '#FF7272' }
      ],
      field: 'RoomID',
      valueField: 'value',
      textField: 'text',
      colorField: 'color'
    },
    {
      name: 'Persons',
      data: [
        { text: 'Peter', value: 1, color: '#5392E4' },
        { text: 'Alex', value: 2, color: '#54677B' }
      ],
      field: 'PersonIDs',
      valueField: 'value',
      textField: 'text',
      colorField: 'color'
    }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.createFormGroup = this.createFormGroup.bind(this);
  }

  ngOnInit(): void {
    this.events = sampleDataWithCustomSchema;
  }

  public createFormGroup(args: CreateFormGroupArgs): FormGroup {
    const dataItem = args.dataItem;
    // const isOccurrence = args.isOccurrence;

    const formGroup = this.formBuilder.group({
      'Id': args.isNew ? this.getNextId() : dataItem.TaskID,
      'Title': dataItem.Title,
      'Start': dataItem.Start,
      'End': dataItem.End,
      'StartTimezone': dataItem.StartTimezone,
      'EndTimezone': dataItem.EndTimezone,
      'Description': dataItem.Description,
      'RecurrenceRule': dataItem.RecurrenceRule,
      'RecurrenceID': dataItem.RecurrenceID,
      'RecurrenceException': dataItem.RecurrenceException,
      'isAllDay': dataItem.isAllDay,
      'RoomID': dataItem.RoomID,
      'PersonIDs': dataItem.PersonIDs
    });

    return formGroup;
  }

  public getNextId(): number {
    const len = this.events.length;
    return (len > 0) ? this.events[this.events.length - 1].TaskID + 1 : 1;
  }

  public handleViewChange(view: string): void {
    this.currentView = view;
  }

  public handleDateChange(date: Date): void {
    this.selectedDate = date;
  }

  public handleDataChange({ created, updated, deleted }: any): void {
    this.events = this.events
      .filter(item => deleted.findIndex((current: any) => current.TaskID === item.TaskID) === -1)
      .map(item => {
        const updatedItem = updated.find((current: any) => current.TaskID === item.TaskID);
        return updatedItem ? updatedItem : item;
      });

    if (created.length > 0) {
      this.events = this.events.concat(created);
    }
  }

  public handleOrientationChange(orientation: 'horizontal' | 'vertical'): void {
    this.orientation = orientation;
  }
}