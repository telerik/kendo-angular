import { Component, ViewEncapsulation, OnInit, HostListener, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KENDO_SCHEDULER, EventStyleArgs, EventClickEvent } from '@progress/kendo-angular-scheduler';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_DIALOG } from '@progress/kendo-angular-dialog';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import {
  SVGIcon,
  searchIcon,
  plusIcon,
  checkCircleIcon,
  calendarIcon,
  circleShapeIcon,
  clockIcon,
  mapMarkerIcon,
  userIcon,
  hyperlinkOpenIcon,
} from '@progress/kendo-svg-icons';
import { AppointmentsService, SchedulerAppointment } from '../services/appointments.service';
import { DailyTask, INITIAL_TASKS } from '../data/schedule.data';

@Component({
  selector: 'app-schedule',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './schedule.html',
  styleUrls: ['./schedule.css'],
  imports: [
    NgClass,
    FormsModule,
    KENDO_SCHEDULER,
    KENDO_LAYOUT,
    KENDO_BUTTONS,
    KENDO_INPUTS,
    KENDO_ICONS,
    KENDO_DIALOG,
    KENDO_DROPDOWNS,
    KENDO_LABELS,
  ],
})
export class ScheduleComponent implements OnInit {
  // Responsive dialog dimensions
  public isNarrowScreen = signal(window.innerWidth < 1000);
  public vw = signal(window.innerWidth);
  public vh = signal(window.innerHeight);

  public dlgW(base: number): number {
    return this.isNarrowScreen() ? Math.min(base, this.vw() - 32) : base;
  }

  public dlgH(base: number): number {
    return this.isNarrowScreen() ? Math.min(base, this.vh() - 32) : base;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.isNarrowScreen.set(window.innerWidth < 1000);
    this.vw.set(window.innerWidth);
    this.vh.set(window.innerHeight);
  }

  public searchIcon: SVGIcon = searchIcon;
  public plusIcon: SVGIcon = plusIcon;
  public checkCircleIcon: SVGIcon = checkCircleIcon;
  public circleIcon: SVGIcon = circleShapeIcon;
  public calendarIcon: SVGIcon = calendarIcon;
  public clockIcon: SVGIcon = clockIcon;
  public mapMarkerIcon: SVGIcon = mapMarkerIcon;
  public userIcon: SVGIcon = userIcon;
  public hyperlinkOpenIcon: SVGIcon = hyperlinkOpenIcon;

  public selectedDate: Date;
  public taskSearch = '';
  public events: SchedulerAppointment[] = [];

  // Event Detail Dialog
  public eventDialogOpened = false;
  public selectedEvent: SchedulerAppointment | null = null;

  // Add Task Dialog
  public addTaskDialogOpened = false;
  public editingTask: DailyTask | null = null;
  public newTaskName = '';
  public newTaskPriority: 'High' | 'Medium' | 'Low' = 'Medium';
  public newTaskDescription = '';
  public priorities: Array<'High' | 'Medium' | 'Low'> = ['High', 'Medium', 'Low'];

  public eventClass = (_args: EventStyleArgs) => 'schedule-event';

  public eventStyles = (args: EventStyleArgs) => {
    const base: Record<string, string> = {
      'background-color': '#C7C2F6',
      color: '#1E1B4B',
    };

    if (args.event.dataItem.striped) {
      return {
        ...base,
        'background-color': '#f5f6ff',
        'border-left': '6px solid transparent',
        'border-image':
          'repeating-linear-gradient(-45deg, #6C63FF, #6C63FF 2px, #C7C2F6 2px, #C7C2F6 5px) 6',
      };
    }

    return {
      ...base,
      'border-left': '4px solid #6C63FF',
    };
  };

  public tasks: DailyTask[] = [...INITIAL_TASKS];

  constructor(private appointmentsService: AppointmentsService) {
    // Initialize selected date to current year - 1 (2025)
    this.selectedDate = new Date();
    this.selectedDate.setFullYear(this.selectedDate.getFullYear() - 1);
  }

  ngOnInit(): void {
    this.events = this.appointmentsService.getSchedulerAppointments();
  }

  public get filteredTasks(): DailyTask[] {
    if (!this.taskSearch) {
      return this.tasks;
    }
    const search = this.taskSearch.toLowerCase();
    return this.tasks.filter((t) => t.title.toLowerCase().includes(search));
  }

  public toggleTask(task: DailyTask): void {
    task.completed = !task.completed;
  }

  public formatEventTime(start: Date, end: Date): string {
    const fmt = (d: Date) => {
      const h = d.getHours().toString().padStart(2, '0');
      const m = d.getMinutes().toString().padStart(2, '0');
      return `${h}:${m}`;
    };
    return `${fmt(start)}-${fmt(end)}`;
  }

  public openAddTaskDialog(task?: DailyTask): void {
    if (task) {
      // Editing existing task
      this.editingTask = task;
      this.newTaskName = task.title;
      this.newTaskPriority = task.priority;
      this.newTaskDescription = '';
    } else {
      // Adding new task
      this.editingTask = null;
      this.newTaskName = '';
      this.newTaskPriority = 'Medium';
      this.newTaskDescription = '';
    }
    this.addTaskDialogOpened = true;
  }

  public closeAddTaskDialog(): void {
    this.addTaskDialogOpened = false;
    // Reset form
    this.editingTask = null;
    this.newTaskName = '';
    this.newTaskPriority = 'Medium';
    this.newTaskDescription = '';
  }

  public saveTask(): void {
    if (!this.newTaskName.trim()) {
      return;
    }

    if (this.editingTask) {
      // Update existing task
      this.editingTask.title = this.newTaskName;
      this.editingTask.priority = this.newTaskPriority;
      console.log('Task updated:', this.editingTask);
    } else {
      // Add new task
      const newTask: DailyTask = {
        id: Math.max(...this.tasks.map((t) => t.id), 0) + 1,
        title: this.newTaskName,
        priority: this.newTaskPriority,
        completed: false,
      };
      this.tasks.unshift(newTask);
      console.log('Task added:', newTask);
    }

    this.closeAddTaskDialog();
  }

  public get dialogTitle(): string {
    return this.editingTask ? 'Edit Task' : 'Add Task';
  }

  public get saveButtonText(): string {
    return this.editingTask ? 'Save changes' : 'Add task';
  }

  @HostListener('document:mousedown', ['$event'])
  public onDocumentMouseDown(event: MouseEvent): void {
    if (this.eventDialogOpened && (event.target as HTMLElement).classList.contains('k-overlay')) {
      this.closeEventDialog();
    }
  }

  public handleEventClick(e: EventClickEvent): void {
    this.selectedEvent = e.event.dataItem as SchedulerAppointment;
    this.eventDialogOpened = true;
  }

  public closeEventDialog(): void {
    this.eventDialogOpened = false;
    this.selectedEvent = null;
  }

  public formatDialogDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  public formatDialogTime(start: Date, end: Date): string {
    const fmt = (d: Date): string => {
      const h = d.getHours() % 12 || 12;
      const m = d.getMinutes();
      const ampm = d.getHours() < 12 ? 'AM' : 'PM';
      return m === 0 ? `${h} ${ampm}` : `${h}:${m.toString().padStart(2, '0')} ${ampm}`;
    };
    return `${fmt(start)} - ${fmt(end)}`;
  }
}
