import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KENDO_SCHEDULER, EventStyleArgs } from '@progress/kendo-angular-scheduler';
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
  circleShapeIcon
} from '@progress/kendo-svg-icons';
import { AppointmentsService, SchedulerAppointment } from '../services/appointments.service';

interface DailyTask {
  id: number;
  title: string;
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
}

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
    KENDO_LABELS
  ]
})
export class ScheduleComponent implements OnInit {
  public searchIcon: SVGIcon = searchIcon;
  public plusIcon: SVGIcon = plusIcon;
  public checkCircleIcon: SVGIcon = checkCircleIcon;
  public circleIcon: SVGIcon = circleShapeIcon;
  public calendarIcon: SVGIcon = calendarIcon;

  public selectedDate: Date;
  public taskSearch = '';
  public events: SchedulerAppointment[] = [];

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
      color: '#1E1B4B'
    };

    if (args.event.dataItem.striped) {
      return {
        ...base,
        'background-color': '#f5f6ff',
        'border-left': '6px solid transparent',
        'border-image': 'repeating-linear-gradient(-45deg, #6C63FF, #6C63FF 2px, #C7C2F6 2px, #C7C2F6 5px) 6'
      };
    }

    return {
      ...base,
      'border-left': '4px solid #6C63FF'
    };
  };

  public tasks: DailyTask[] = [
    { id: 1, title: 'Complete discharge paperwork for John Smith', priority: 'High', completed: false },
    { id: 2, title: 'Call pharmacy for Emma Davis prescription', priority: 'Medium', completed: true },
    { id: 3, title: 'Sign off on radiology reports', priority: 'Low', completed: false },
    { id: 4, title: 'Review insurance authorization requests', priority: 'High', completed: true },
    { id: 5, title: 'Update treatment plan for Mike Davis', priority: 'High', completed: false },
    { id: 6, title: 'Sign off on radiology reports', priority: 'Medium', completed: false },
    { id: 7, title: 'Review lab results for Sarah Johnson', priority: 'Low', completed: true },
    { id: 8, title: 'Complete discharge paperwork for John Smith', priority: 'High', completed: false },
    { id: 9, title: 'Review lab results for Sarah Johnson', priority: 'High', completed: true },
    { id: 10, title: 'Review insurance authorization requests', priority: 'Medium', completed: true }
  ];

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
    return this.tasks.filter(t => t.title.toLowerCase().includes(search));
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
        id: Math.max(...this.tasks.map(t => t.id), 0) + 1,
        title: this.newTaskName,
        priority: this.newTaskPriority,
        completed: false
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
}
