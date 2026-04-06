import { Injectable } from '@angular/core';

export interface SchedulerAppointment {
  id: number;
  title: string;
  reason: string;
  start: Date;
  end: Date;
  description: string;
  striped: boolean;
  cancelled?: boolean;
  status?: 'Complete' | 'In Progress' | 'Upcoming' | 'Cancelled';
}

export interface GridAppointment {
  time: string;
  patientName: string;
  reason: string;
  status: 'Complete' | 'In Progress' | 'Upcoming' | 'Cancelled';
  room: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  private cachedAppointments: SchedulerAppointment[] | null = null;

  // Initialize cache with hardcoded appointments
  private ensureAppointmentsLoaded(): void {
    if (!this.cachedAppointments) {
      this.cachedAppointments = this.getHardcodedAppointments();
    }
  }

  // Hardcoded appointments for consistency
  private getHardcodedAppointments(): SchedulerAppointment[] {
    const today = new Date();
    const year = today.getFullYear() - 1; // Use previous year (2025)
    const month = today.getMonth();
    const day = today.getDate();

    return [
      // Today's appointments (at least 10 with all statuses)
      {
        id: 1,
        title: 'Daniel Thompson',
        reason: 'Annual Physical',
        start: new Date(year, month, day, 8, 0),
        end: new Date(year, month, day, 9, 0),
        description: '204 (Floor 2)',
        striped: false,
        cancelled: false,
        status: 'Complete' as const,
      },
      {
        id: 2,
        title: 'Sophia Martinez',
        reason: 'Follow-up',
        start: new Date(year, month, day, 9, 0),
        end: new Date(year, month, day, 10, 0),
        description: '456 (Floor 4)',
        striped: false,
        cancelled: false,
        status: 'Complete' as const,
      },
      {
        id: 3,
        title: "Michael O'Connor",
        reason: 'Lab Review',
        start: new Date(year, month, day, 10, 30),
        end: new Date(year, month, day, 11, 30),
        description: '112 (Floor 1)',
        striped: true,
        cancelled: true,
        status: 'Cancelled' as const,
      },
      {
        id: 4,
        title: 'Ava Patel',
        reason: 'Initial Consultation',
        start: new Date(year, month, day, 11, 30),
        end: new Date(year, month, day, 12, 30),
        description: '208 (Floor 2)',
        striped: false,
        cancelled: false,
        status: 'In Progress' as const,
      },
      {
        id: 5,
        title: 'George Slavowsky',
        reason: 'Knee pain after basketball injury',
        start: new Date(year, month, day, 13, 0),
        end: new Date(year, month, day, 14, 0),
        description: '305 (Floor 3)',
        striped: false,
        cancelled: false,
        status: 'In Progress' as const,
      },
      {
        id: 6,
        title: 'Isabella Rossi',
        reason: 'Cardiology Follow-up',
        start: new Date(year, month, day, 14, 0),
        end: new Date(year, month, day, 15, 0),
        description: '101 (Floor 1)',
        striped: false,
        cancelled: false,
        status: 'Upcoming' as const,
      },
      {
        id: 7,
        title: 'Alexander Novak',
        reason: 'Cardiology Consult',
        start: new Date(year, month, day, 15, 0),
        end: new Date(year, month, day, 16, 0),
        description: '410 (Floor 4)',
        striped: false,
        cancelled: false,
        status: 'Upcoming' as const,
      },
      {
        id: 8,
        title: 'Emma Rodriguez',
        reason: 'Diabetes Management',
        start: new Date(year, month, day, 16, 0),
        end: new Date(year, month, day, 17, 0),
        description: '204 (Floor 2)',
        striped: true,
        cancelled: true,
        status: 'Cancelled' as const,
      },
      {
        id: 9,
        title: 'Benjamin Carter',
        reason: 'Blood Pressure Check',
        start: new Date(year, month, day, 17, 0),
        end: new Date(year, month, day, 18, 0),
        description: '112 (Floor 1)',
        striped: false,
        cancelled: false,
        status: 'Upcoming' as const,
      },
      {
        id: 10,
        title: 'Sarah Johnson',
        reason: 'X-Ray Review',
        start: new Date(year, month, day, 18, 0),
        end: new Date(year, month, day, 19, 0),
        description: '208 (Floor 2)',
        striped: false,
        cancelled: false,
        status: 'Upcoming' as const,
      },
      {
        id: 11,
        title: 'David Lee',
        reason: 'Vaccination',
        start: new Date(year, month, day, 19, 0),
        end: new Date(year, month, day, 20, 0),
        description: '101 (Floor 1)',
        striped: false,
        cancelled: false,
        status: 'Upcoming' as const,
      },
      {
        id: 12,
        title: 'Olivia Brown',
        reason: 'Allergy Testing',
        start: new Date(year, month, day, 20, 0),
        end: new Date(year, month, day, 21, 0),
        description: '305 (Floor 3)',
        striped: false,
        cancelled: false,
        status: 'Upcoming' as const,
      },

      // Yesterday
      {
        id: 13,
        title: 'William Garcia',
        reason: 'Physical Therapy',
        start: new Date(year, month, day - 1, 9, 0),
        end: new Date(year, month, day - 1, 10, 0),
        description: '456 (Floor 4)',
        striped: false,
        cancelled: false,
      },
      {
        id: 14,
        title: 'Emma Anderson',
        reason: 'Prescription Renewal',
        start: new Date(year, month, day - 1, 11, 0),
        end: new Date(year, month, day - 1, 12, 0),
        description: '112 (Floor 1)',
        striped: false,
        cancelled: false,
      },
      {
        id: 15,
        title: 'Lucas Taylor',
        reason: 'Follow-up',
        start: new Date(year, month, day - 1, 14, 0),
        end: new Date(year, month, day - 1, 15, 0),
        description: '204 (Floor 2)',
        striped: false,
        cancelled: false,
      },
      {
        id: 16,
        title: 'Charlotte White',
        reason: 'Wellness Visit',
        start: new Date(year, month, day - 1, 15, 30),
        end: new Date(year, month, day - 1, 16, 0),
        description: '410 (Floor 4)',
        striped: false,
        cancelled: false,
      },

      // Tomorrow
      {
        id: 17,
        title: 'James Wilson',
        reason: 'Annual Physical',
        start: new Date(year, month, day + 1, 8, 30),
        end: new Date(year, month, day + 1, 9, 30),
        description: '101 (Floor 1)',
        striped: false,
        cancelled: false,
      },
      {
        id: 18,
        title: 'Mia Robinson',
        reason: 'Lab Review',
        start: new Date(year, month, day + 1, 10, 0),
        end: new Date(year, month, day + 1, 10, 30),
        description: '208 (Floor 2)',
        striped: false,
        cancelled: false,
      },
      {
        id: 19,
        title: 'Ethan Davis',
        reason: 'Cardiology Consult',
        start: new Date(year, month, day + 1, 14, 0),
        end: new Date(year, month, day + 1, 15, 0),
        description: '305 (Floor 3)',
        striped: false,
        cancelled: false,
      },
      {
        id: 20,
        title: 'Harper Miller',
        reason: 'Initial Consultation',
        start: new Date(year, month, day + 1, 16, 0),
        end: new Date(year, month, day + 1, 17, 0),
        description: '456 (Floor 4)',
        striped: false,
        cancelled: false,
      },

      // Day after tomorrow
      {
        id: 21,
        title: 'Logan Moore',
        reason: 'Post-op Check',
        start: new Date(year, month, day + 2, 9, 30),
        end: new Date(year, month, day + 2, 10, 30),
        description: '204 (Floor 2)',
        striped: false,
        cancelled: false,
      },
      {
        id: 22,
        title: 'Amelia Taylor',
        reason: 'Routine Checkup',
        start: new Date(year, month, day + 2, 11, 0),
        end: new Date(year, month, day + 2, 12, 0),
        description: '112 (Floor 1)',
        striped: false,
        cancelled: false,
      },
      {
        id: 23,
        title: 'Noah Jackson',
        reason: 'Diabetes Management',
        start: new Date(year, month, day + 2, 15, 0),
        end: new Date(year, month, day + 2, 16, 0),
        description: '410 (Floor 4)',
        striped: false,
        cancelled: false,
      },

      // Next week (same weekday)
      {
        id: 24,
        title: 'Ella Martin',
        reason: 'Blood Pressure Check',
        start: new Date(year, month, day + 7, 10, 0),
        end: new Date(year, month, day + 7, 11, 0),
        description: '101 (Floor 1)',
        striped: false,
        cancelled: false,
      },
      {
        id: 25,
        title: 'Liam Parker',
        reason: 'X-Ray Review',
        start: new Date(year, month, day + 7, 13, 30),
        end: new Date(year, month, day + 7, 14, 30),
        description: '208 (Floor 2)',
        striped: false,
        cancelled: false,
      },
      {
        id: 26,
        title: 'Ava Thompson',
        reason: 'Vaccination',
        start: new Date(year, month, day + 7, 15, 0),
        end: new Date(year, month, day + 7, 16, 0),
        description: '305 (Floor 3)',
        striped: false,
        cancelled: false,
      },

      // Two weeks out
      {
        id: 27,
        title: 'Oliver Harris',
        reason: 'Allergy Testing',
        start: new Date(year, month, day + 14, 9, 0),
        end: new Date(year, month, day + 14, 10, 0),
        description: '456 (Floor 4)',
        striped: false,
        cancelled: false,
      },
      {
        id: 28,
        title: 'Sophia Clark',
        reason: 'Physical Therapy',
        start: new Date(year, month, day + 14, 11, 30),
        end: new Date(year, month, day + 14, 12, 30),
        description: '204 (Floor 2)',
        striped: false,
        cancelled: false,
      },
      {
        id: 29,
        title: 'Mason Lewis',
        reason: 'Follow-up',
        start: new Date(year, month, day + 14, 14, 0),
        end: new Date(year, month, day + 14, 15, 0),
        description: '112 (Floor 1)',
        striped: false,
        cancelled: false,
      },

      // Last week
      {
        id: 30,
        title: 'Isabella Walker',
        reason: 'Wellness Visit',
        start: new Date(year, month, day - 7, 10, 30),
        end: new Date(year, month, day - 7, 11, 30),
        description: '101 (Floor 1)',
        striped: false,
        cancelled: false,
      },
      {
        id: 31,
        title: 'Henry Martinez',
        reason: 'Annual Physical',
        start: new Date(year, month, day - 7, 13, 0),
        end: new Date(year, month, day - 7, 14, 0),
        description: '208 (Floor 2)',
        striped: false,
        cancelled: false,
      },
      {
        id: 32,
        title: 'Grace Wilson',
        reason: 'Lab Review',
        start: new Date(year, month, day - 7, 15, 30),
        end: new Date(year, month, day - 7, 16, 30),
        description: '305 (Floor 3)',
        striped: false,
        cancelled: false,
      },

      // Additional appointments for variety across weeks
      {
        id: 33,
        title: 'Jack Thompson',
        reason: 'Initial Consultation',
        start: new Date(year, month, day + 3, 8, 30),
        end: new Date(year, month, day + 3, 9, 0),
        description: '410 (Floor 4)',
        striped: false,
        cancelled: false,
      },
      {
        id: 34,
        title: 'Sophie Anderson',
        reason: 'Post-op Check',
        start: new Date(year, month, day + 3, 13, 30),
        end: new Date(year, month, day + 3, 14, 30),
        description: '456 (Floor 4)',
        striped: false,
        cancelled: false,
      },
      {
        id: 35,
        title: 'Ryan Davis',
        reason: 'Routine Checkup',
        start: new Date(year, month, day + 4, 10, 0),
        end: new Date(year, month, day + 4, 11, 0),
        description: '112 (Floor 1)',
        striped: false,
        cancelled: false,
      },
      {
        id: 36,
        title: 'Lily Brown',
        reason: 'Cardiology Consult',
        start: new Date(year, month, day + 4, 14, 30),
        end: new Date(year, month, day + 4, 15, 30),
        description: '204 (Floor 2)',
        striped: false,
        cancelled: false,
      },
      {
        id: 37,
        title: 'Max Johnson',
        reason: 'Diabetes Management',
        start: new Date(year, month, day + 5, 9, 30),
        end: new Date(year, month, day + 5, 10, 30),
        description: '101 (Floor 1)',
        striped: false,
        cancelled: false,
      },

      // March appointments across the month for better month view (randomly distributed)
      {
        id: 38,
        title: 'Emily Chen',
        reason: 'Annual Physical',
        start: new Date(year, 2, 2, 9, 0),
        end: new Date(year, 2, 2, 10, 0),
        description: '204 (Floor 2)',
        striped: false,
        cancelled: false,
      },
      {
        id: 39,
        title: 'Michael Brown',
        reason: 'Follow-up',
        start: new Date(year, 2, 4, 14, 0),
        end: new Date(year, 2, 4, 15, 0),
        description: '112 (Floor 1)',
        striped: false,
        cancelled: false,
      },
      {
        id: 40,
        title: 'Jennifer Williams',
        reason: 'Lab Review',
        start: new Date(year, 2, 4, 10, 30),
        end: new Date(year, 2, 4, 11, 30),
        description: '305 (Floor 3)',
        striped: false,
        cancelled: false,
      },
      {
        id: 41,
        title: 'Robert Martinez',
        reason: 'Cardiology Consult',
        start: new Date(year, 2, 6, 15, 0),
        end: new Date(year, 2, 6, 16, 0),
        description: '410 (Floor 4)',
        striped: false,
        cancelled: false,
      },
      {
        id: 42,
        title: 'Sarah Rodriguez',
        reason: 'Diabetes Management',
        start: new Date(year, 2, 9, 9, 30),
        end: new Date(year, 2, 9, 10, 30),
        description: '208 (Floor 2)',
        striped: false,
        cancelled: false,
      },
      {
        id: 43,
        title: 'David Lee',
        reason: 'Physical Therapy',
        start: new Date(year, 2, 11, 13, 30),
        end: new Date(year, 2, 11, 14, 30),
        description: '101 (Floor 1)',
        striped: false,
        cancelled: false,
      },
      {
        id: 44,
        title: 'Lisa Anderson',
        reason: 'Wellness Visit',
        start: new Date(year, 2, 11, 8, 30),
        end: new Date(year, 2, 11, 9, 30),
        description: '456 (Floor 4)',
        striped: false,
        cancelled: false,
      },
      {
        id: 45,
        title: 'James Taylor',
        reason: 'Initial Consultation',
        start: new Date(year, 2, 13, 11, 0),
        end: new Date(year, 2, 13, 12, 0),
        description: '204 (Floor 2)',
        striped: false,
        cancelled: false,
      },
      {
        id: 46,
        title: 'Maria Garcia',
        reason: 'Blood Pressure Check',
        start: new Date(year, 2, 15, 10, 0),
        end: new Date(year, 2, 15, 11, 0),
        description: '112 (Floor 1)',
        striped: false,
        cancelled: false,
      },
      {
        id: 47,
        title: 'William Davis',
        reason: 'X-Ray Review',
        start: new Date(year, 2, 16, 14, 30),
        end: new Date(year, 2, 16, 15, 30),
        description: '305 (Floor 3)',
        striped: true,
        cancelled: true,
      },
      {
        id: 48,
        title: 'Patricia Wilson',
        reason: 'Vaccination',
        start: new Date(year, 2, 16, 9, 0),
        end: new Date(year, 2, 16, 10, 0),
        description: '208 (Floor 2)',
        striped: false,
        cancelled: false,
      },
      {
        id: 49,
        title: 'Christopher Moore',
        reason: 'Allergy Testing',
        start: new Date(year, 2, 18, 15, 0),
        end: new Date(year, 2, 18, 16, 0),
        description: '410 (Floor 4)',
        striped: false,
        cancelled: false,
      },
      {
        id: 50,
        title: 'Linda Thomas',
        reason: 'Routine Checkup',
        start: new Date(year, 2, 20, 10, 30),
        end: new Date(year, 2, 20, 11, 30),
        description: '101 (Floor 1)',
        striped: false,
        cancelled: false,
      },
      {
        id: 51,
        title: 'Daniel Jackson',
        reason: 'Post-op Check',
        start: new Date(year, 2, 20, 13, 0),
        end: new Date(year, 2, 20, 14, 0),
        description: '456 (Floor 4)',
        striped: false,
        cancelled: false,
      },
      {
        id: 52,
        title: 'Nancy White',
        reason: 'Cardiology Follow-up',
        start: new Date(year, 2, 22, 8, 30),
        end: new Date(year, 2, 22, 9, 30),
        description: '204 (Floor 2)',
        striped: false,
        cancelled: false,
      },
      {
        id: 53,
        title: 'Matthew Harris',
        reason: 'Diabetes Management',
        start: new Date(year, 2, 23, 14, 0),
        end: new Date(year, 2, 23, 15, 0),
        description: '112 (Floor 1)',
        striped: false,
        cancelled: false,
      },
      {
        id: 54,
        title: 'Betty Martin',
        reason: 'Annual Physical',
        start: new Date(year, 2, 25, 9, 30),
        end: new Date(year, 2, 25, 10, 30),
        description: '305 (Floor 3)',
        striped: false,
        cancelled: false,
      },
      {
        id: 55,
        title: 'Mark Thompson',
        reason: 'Lab Review',
        start: new Date(year, 2, 25, 11, 30),
        end: new Date(year, 2, 25, 12, 30),
        description: '208 (Floor 2)',
        striped: false,
        cancelled: false,
      },
      {
        id: 56,
        title: 'Sandra Garcia',
        reason: 'Physical Therapy',
        start: new Date(year, 2, 27, 10, 0),
        end: new Date(year, 2, 27, 11, 0),
        description: '410 (Floor 4)',
        striped: false,
        cancelled: false,
      },
      {
        id: 57,
        title: 'Steven Martinez',
        reason: 'Follow-up',
        start: new Date(year, 2, 29, 15, 30),
        end: new Date(year, 2, 29, 16, 30),
        description: '101 (Floor 1)',
        striped: false,
        cancelled: false,
      },
      {
        id: 58,
        title: 'Dorothy Robinson',
        reason: 'Wellness Visit',
        start: new Date(year, 2, 30, 9, 0),
        end: new Date(year, 2, 30, 10, 0),
        description: '456 (Floor 4)',
        striped: false,
        cancelled: false,
      },
      {
        id: 59,
        title: 'Paul Clark',
        reason: 'Initial Consultation',
        start: new Date(year, 2, 30, 13, 30),
        end: new Date(year, 2, 30, 14, 30),
        description: '204 (Floor 2)',
        striped: false,
        cancelled: false,
      },
      {
        id: 60,
        title: 'Carol Rodriguez',
        reason: 'Blood Pressure Check',
        start: new Date(year, 2, 1, 8, 30),
        end: new Date(year, 2, 1, 9, 30),
        description: '112 (Floor 1)',
        striped: false,
        cancelled: false,
      },
      {
        id: 61,
        title: 'George Lewis',
        reason: 'Cardiology Consult',
        start: new Date(year, 2, 8, 14, 0),
        end: new Date(year, 2, 8, 15, 0),
        description: '305 (Floor 3)',
        striped: false,
        cancelled: false,
      },
    ].sort((a, b) => a.start.getTime() - b.start.getTime());
  }

  // Public method to get all scheduler appointments
  public getSchedulerAppointments(): SchedulerAppointment[] {
    this.ensureAppointmentsLoaded();
    return this.cachedAppointments!;
  }

  // Get today's appointments for the grid
  public getTodaysAppointments(): GridAppointment[] {
    this.ensureAppointmentsLoaded();

    const today = new Date();
    today.setFullYear(today.getFullYear() - 1); // Match the year of mocked data (2025)
    today.setHours(0, 0, 0, 0);

    // Filter today's appointments from cached data
    const schedulerAppointments = this.cachedAppointments!.filter((apt) => {
      const aptDate = new Date(apt.start);
      aptDate.setHours(0, 0, 0, 0);
      return aptDate.getTime() === today.getTime();
    });

    return schedulerAppointments.map((apt) => {
      // Use hardcoded status from mock data, or default to 'Upcoming'
      const status = apt.status || (apt.cancelled ? 'Cancelled' : 'Upcoming');

      return {
        time: this.formatTime(apt.start),
        patientName: apt.title,
        reason: apt.reason,
        status,
        room: apt.description,
      };
    });
  }

  // Helper method
  private formatTime(date: Date): string {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes.toString().padStart(2, '0');
    return `${hours.toString().padStart(2, '0')}:${minutesStr} ${ampm}`;
  }
}
