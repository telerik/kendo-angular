import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

declare var kendo: any;

@Component({
    selector: 'app-other',
    template: `
        <hr />
        <p>Kendo UI for jQuery Gantt:</p>
        <div #gantt></div>
    `
})
export class TestGanttComponent implements AfterViewInit, OnDestroy {
    @ViewChild('gantt') ganttEl: ElementRef;

    private readonly serviceRoot = 'https://demos.telerik.com/kendo-ui/service';
    private readonly tasksDataSource = new kendo.data.GanttDataSource({
        transport: {
            read: {
                url: this.serviceRoot + '/GanttTasks',
                dataType: 'jsonp'
            },
            update: {
                url: this.serviceRoot + '/GanttTasks/Update',
                dataType: 'jsonp'
            },
            destroy: {
                url: this.serviceRoot + '/GanttTasks/Destroy',
                dataType: 'jsonp'
            },
            create: {
                url: this.serviceRoot + '/GanttTasks/Create',
                dataType: 'jsonp'
            },
            parameterMap: function(options, operation) {
                if (operation !== 'read') {
                    return { models: kendo.stringify(options.models || [options]) };
                }
            }
        },
        schema: {
            model: {
                id: 'id',
                fields: {
                    id: { from: 'ID', type: 'number' },
                    orderId: { from: 'OrderID', type: 'number', validation: { required: true } },
                    parentId: { from: 'ParentID', type: 'number', defaultValue: null, validation: { required: true } },
                    start: { from: 'Start', type: 'date' },
                    end: { from: 'End', type: 'date' },
                    title: { from: 'Title', defaultValue: '', type: 'string' },
                    percentComplete: { from: 'PercentComplete', type: 'number' },
                    summary: { from: 'Summary', type: 'boolean' },
                    expanded: { from: 'Expanded', type: 'boolean', defaultValue: true }
                }
            }
        }
    });

    private readonly dependenciesDataSource = new kendo.data.GanttDependencyDataSource({
        transport: {
            read: {
                url: this.serviceRoot + '/GanttDependencies',
                dataType: 'jsonp'
            },
            update: {
                url: this.serviceRoot + '/GanttDependencies/Update',
                dataType: 'jsonp'
            },
            destroy: {
                url: this.serviceRoot + '/GanttDependencies/Destroy',
                dataType: 'jsonp'
            },
            create: {
                url: this.serviceRoot + '/GanttDependencies/Create',
                dataType: 'jsonp'
            },
            parameterMap: function(options, operation) {
                if (operation !== 'read') {
                    return { models: kendo.stringify(options.models || [options]) };
                }
            }
        },
        schema: {
            model: {
                id: 'id',
                fields: {
                    id: { from: 'ID', type: 'number' },
                    predecessorId: { from: 'PredecessorID', type: 'number' },
                    successorId: { from: 'SuccessorID', type: 'number' },
                    type: { from: 'Type', type: 'number' }
                }
            }
        }
    });

    constructor(private hostEl: ElementRef) {}

    ngAfterViewInit() {
        kendo.jQuery(this.ganttEl.nativeElement).kendoGantt({
            dataSource: this.tasksDataSource,
            dependencies: this.dependenciesDataSource,
            views: [
                'day',
                { type: 'week', selected: true },
                'month'
            ],
            columns: [
                { field: 'id', title: 'ID', width: 60 },
                { field: 'title', title: 'Title', editable: true, sortable: true },
                { field: 'start', title: 'Start Time', format: '{0:MM/dd/yyyy}', width: 100, editable: true, sortable: true },
                { field: 'end', title: 'End Time', format: '{0:MM/dd/yyyy}', width: 100, editable: true, sortable: true }
            ],
            height: 700,

            showWorkHours: false,
            showWorkDays: false,

            snap: false
        });
    }

    ngOnDestroy(): void {
        kendo.destroy(this.hostEl.nativeElement);
    }
}

