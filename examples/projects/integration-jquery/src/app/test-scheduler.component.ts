import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

declare var kendo: any;

@Component({
    selector: 'app-other',
    template: `
        <hr />
        <p>Kendo UI for jQuery Scheduler:</p>
        <div #scheduler></div>
    `
})
export class TestSchedulerComponent implements AfterViewInit, OnDestroy {
    @ViewChild('scheduler', { static: true }) schedulerEl: ElementRef;

    constructor(private hostEl: ElementRef) {}

    ngAfterViewInit() {
        kendo.jQuery(this.schedulerEl.nativeElement).kendoScheduler({
            date: new Date('2013/6/13'),
            startTime: new Date('2013/6/13 07:00 AM'),
            height: 600,
            views: [
                { type: 'day' },
                { type: 'workWeek', selected: true },
                { type: 'week' },
                { type: 'month' },
                { type: 'agenda' },
                { type: 'timeline', eventHeight: 50 }
            ],
            timezone: 'Etc/UTC',
            dataSource: {
                batch: true,
                transport: {
                    read: {
                        url: 'https://demos.telerik.com/kendo-ui/service/tasks',
                        dataType: 'jsonp'
                    },
                    update: {
                        url: 'https://demos.telerik.com/kendo-ui/service/tasks/update',
                        dataType: 'jsonp'
                    },
                    create: {
                        url: 'https://demos.telerik.com/kendo-ui/service/tasks/create',
                        dataType: 'jsonp'
                    },
                    destroy: {
                        url: 'https://demos.telerik.com/kendo-ui/service/tasks/destroy',
                        dataType: 'jsonp'
                    },
                    parameterMap(options, operation) {
                        if (operation !== 'read' && options.models) {
                            return { models: kendo.stringify(options.models) };
                        }
                    }
                },
                schema: {
                    model: {
                        id: 'taskId',
                        fields: {
                            taskId: { from: 'TaskID', type: 'number' },
                            title: { from: 'Title', defaultValue: 'No title', validation: { required: true } },
                            start: { type: 'date', from: 'Start' },
                            end: { type: 'date', from: 'End' },
                            startTimezone: { from: 'StartTimezone' },
                            endTimezone: { from: 'EndTimezone' },
                            description: { from: 'Description' },
                            recurrenceId: { from: 'RecurrenceID' },
                            recurrenceRule: { from: 'RecurrenceRule' },
                            recurrenceException: { from: 'RecurrenceException' },
                            ownerId: { from: 'OwnerID', defaultValue: 1 },
                            isAllDay: { type: 'boolean', from: 'IsAllDay' }
                        }
                    }
                },
                filter: {
                    logic: 'or',
                    filters: [
                        { field: 'ownerId', operator: 'eq', value: 1 },
                        { field: 'ownerId', operator: 'eq', value: 2 }
                    ]
                }
            },
            resources: [
                {
                    field: 'ownerId',
                    title: 'Owner',
                    dataSource: [
                        { text: 'Alex', value: 1, color: '#f8a398' },
                        { text: 'Bob', value: 2, color: '#51a0ed' },
                        { text: 'Charlie', value: 3, color: '#56ca85' }
                    ]
                }
            ]
        });
    }

    ngOnDestroy(): void {
        kendo.destroy(this.hostEl.nativeElement);
    }
}
