import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ChipThemeColor, KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { guid } from '@progress/kendo-angular-common';
import {
  ChatSuggestion,
  KENDO_CONVERSATIONALUI,
  Message,
  SendMessageEvent,
  User,
} from '@progress/kendo-angular-conversational-ui';
import { KENDO_DIALOG } from '@progress/kendo-angular-dialog';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_GRID } from '@progress/kendo-angular-grid';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_INDICATORS } from '@progress/kendo-angular-indicators';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_POPUP } from '@progress/kendo-angular-popup';
import {
  SVGIcon,
  chevronRightIcon,
  clipboardIcon,
  clockIcon,
  commentIcon,
  hyperlinkOpenIcon,
  pillsSolidIcon,
  plusIcon,
  sparklesIcon,
  stickyNoteIcon,
  xIcon,
} from '@progress/kendo-svg-icons';
import { PATIENTS_DATA, PatientProfile } from '../data/patients.data';
import { DAILY_ALERTS, HOME_PATIENTS, LAB_TESTS, DailyAlert, HomePatient, LabTest } from '../data/home.data';
import { MarkdownPipe } from '../pipes/markdown.pipe';
import { AppointmentsService, GridAppointment } from '../services/appointments.service';

@Component({
  selector: 'app-home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [
    FormsModule,
    KENDO_BUTTONS,
    KENDO_ICONS,
    KENDO_INDICATORS,
    KENDO_LAYOUT,
    KENDO_GRID,
    KENDO_DIALOG,
    KENDO_DROPDOWNS,
    KENDO_INPUTS,
    KENDO_LABELS,
    KENDO_POPUP,
    KENDO_CONVERSATIONALUI,
    MarkdownPipe,
  ],
})
export class HomeComponent implements OnInit {
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

  // Quick Actions Icons
  public stickyNoteIcon: SVGIcon = stickyNoteIcon;

  public getAppointmentStatusColor(status: string): ChipThemeColor {
    const colorMap: Record<string, ChipThemeColor> = {
      Complete: 'success',
      'In Progress': 'warning',
      Upcoming: 'info',
      Cancelled: 'error',
    };
    return colorMap[status] ?? 'base';
  }

  public fileDataIcon: SVGIcon = {
    name: 'lab-text',
    content: `<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<g>
<path d="M24.5 3.5V14C24.4997 14.5871 24.6471 15.1648 24.9287 15.68L34.5712 33.32C34.8629 33.8531 35.0107 34.4529 35.0002 35.0604C34.9898 35.668 34.8213 36.2623 34.5114 36.785C34.2015 37.3077 33.7608 37.7407 33.2328 38.0414C32.7048 38.3421 32.1076 38.5001 31.5 38.5H10.5C9.89232 38.5001 9.29511 38.3421 8.76709 38.0414C8.23907 37.7407 7.79844 37.3077 7.48854 36.785C7.17864 36.2623 7.01016 35.668 6.99967 35.0604C6.98918 34.4529 7.13704 33.8531 7.42871 33.32L17.0712 15.68C17.3528 15.1648 17.5002 14.5871 17.5 14V3.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.2927 26.25H30.7072" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.875 3.5H27.125" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
`,
    viewBox: '0 0 42 42',
  };
  public commentIcon: SVGIcon = commentIcon;
  public plusIcon: SVGIcon = plusIcon;

  // Next Patient Icons
  public clockIcon: SVGIcon = clockIcon;
  public chevronRightIcon: SVGIcon = chevronRightIcon;
  public linkIcon: SVGIcon = hyperlinkOpenIcon;
  public clipboardIcon: SVGIcon = clipboardIcon;
  public pillIcon: SVGIcon = pillsSolidIcon;
  public xIcon: SVGIcon = xIcon;

  public currentDate: string;

  // Appointments data
  public appointments: GridAppointment[] = [];

  // Next Patient data
  public nextPatient: PatientProfile | null = null;

  // Dialog states
  public clinicalNoteDialogOpened = false;
  public labTestDialogOpened = false;
  public messageNurseDialogOpened = false;
  public alertDialogOpened = false;
  public reasonForVisitDialogOpened = false;
  public allergyAlertDialogOpened = false;
  public chatPopupOpened = false;

  // Chat popup anchor
  public sparklesIcon: SVGIcon = sparklesIcon;
  @ViewChild('fabButton', { read: ElementRef }) public fabButton?: ElementRef;

  // Chat properties

  public currentUser: User = {
    id: 1,
    name: 'Dr. Carter',
  };
  public aiAssistant: User = {
    id: 0,
    name: '',
  };

  public chatMessages: Message[] = [
    {
      id: guid(),
      author: this.aiAssistant,
      text: `👋 Hello! I'm your AI Assistant`,
    },
    {
      id: guid(),
      author: this.aiAssistant,
      text: `I can help you with your daily clinical tasks, patient information, and quick actions. Try one of the suggestions below!`,
    },
  ];

  public chatSuggestions: ChatSuggestion[] = [
    { id: 1, text: 'Summary for next patient' },
    { id: 2, text: 'Provide lab result for next patient' },
    { id: 3, text: 'How many patients do I have today' },
  ];

  // Daily Alerts data
  public dailyAlerts: DailyAlert[] = [...DAILY_ALERTS];

  public selectedAlert: any = null;

  // Reason for Visit data
  public reasonForVisit = {
    patient: 'Isabella Rossi',
    patientId: 'P-102563',
    appointmentDate: 'Today, 9:30 AM',
    visitType: 'Cardiology Follow-up',
    primaryConcern: 'Post-procedure cardiac monitoring',
    background:
      'Patient is scheduled for a routine cardiology follow-up appointment following a successful cardiac catheterization procedure performed 6 weeks ago. The procedure was done to evaluate coronary artery disease.',
    previousVisits: [
      { date: '6 weeks ago', description: 'Cardiac catheterization procedure - successful' },
      {
        date: '3 months ago',
        description: 'Initial cardiology consultation - chest pain evaluation',
      },
      { date: '4 months ago', description: 'Stress test - abnormal results' },
    ],
    objectives: [
      'Review catheterization results and discuss findings',
      'Assess current cardiac symptoms and medication response',
      'Evaluate ECG and recent lab work',
      'Review lifestyle modifications and cardiac rehabilitation progress',
      'Adjust medication dosage if necessary',
      'Schedule next follow-up appointment',
    ],
    preparationNotes: [
      'Review patient chart and catheterization report',
      'Have recent ECG and lab results available',
      'Prepare medication adjustment options if needed',
    ],
  };

  // Allergy Alert data
  public allergyAlert = {
    patient: 'Isabella Rossi',
    patientId: 'P-102563',
    allergen: 'Penicillin',
    allergyType: 'Drug Allergy',
    severity: 'Severe',
    reaction: 'Anaphylaxis',
    firstReported: 'March 2018',
    symptoms: [
      'Difficulty breathing and wheezing',
      'Severe skin rash and hives',
      'Swelling of face, lips, and throat',
      'Rapid pulse and dizziness',
      'Loss of consciousness (reported in initial episode)',
    ],
    crossReactivities: [
      'Amoxicillin',
      'Ampicillin',
      'Other beta-lactam antibiotics',
      'Possibly cephalosporins (use with caution)',
    ],
    safeAlternatives: [
      'Fluoroquinolones (e.g., Levofloxacin, Ciprofloxacin)',
      'Macrolides (e.g., Azithromycin, Clarithromycin)',
      'Tetracyclines (e.g., Doxycycline)',
      'Vancomycin for severe infections',
    ],
    emergencyProtocol: [
      'Immediately discontinue any suspected beta-lactam antibiotic',
      'Administer epinephrine 0.3-0.5mg IM if anaphylaxis symptoms appear',
      'Administer antihistamines (Diphenhydramine 50mg)',
      'Provide oxygen support and monitor vital signs',
      'Call emergency response team',
      'Be prepared for potential intubation if airway compromised',
    ],
    notes:
      'Patient carries EpiPen at all times. Family members are trained in emergency response. Allergy documented in all medical records and patient wears medical alert bracelet.',
  };

  // Clinical Note Dialog data
  public patients: HomePatient[] = [...HOME_PATIENTS];
  public selectedPatient = this.patients[0];
  public clinicalNoteText = '';

  // Lab Test Dialog data
  public labTestPatient: HomePatient = this.patients[0];
  public labTestSearchQuery = '';
  public labTests: LabTest[] = [...LAB_TESTS];

  // Message Nurse Dialog data
  public recipientEmail = 'oliviaparker@email.com';
  public messageSubject = "Check James Carter's Latest Lab Results";
  public messageDescription = `Hi Olivia,

Please take a moment to review James Carter's latest test results when you have a chance. There are a few values that may require attention, and it would be good to confirm if any follow-up actions are needed. Let me know your thoughts after reviewing.

Thanks,
Dr. Carter`;

  constructor(
    private router: Router,
    private appointmentsService: AppointmentsService,
  ) {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1); // Use previous year (2025)
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    this.currentDate = date.toLocaleDateString('en-US', options);
  }

  ngOnInit(): void {
    this.appointments = this.appointmentsService.getTodaysAppointments();

    // Set next patient to Isabella Rossi (id: 3)
    this.nextPatient = PATIENTS_DATA.find((p) => p.id === 3) || null;
  }

  public navigateToSchedule(): void {
    this.router.navigate(['/schedule']);
  }

  public navigateToPatientProfile(patientId: number): void {
    this.router.navigate(['/patients', patientId]);
  }

  // Dialog methods
  public openClinicalNoteDialog(): void {
    this.clinicalNoteDialogOpened = true;
  }

  public closeClinicalNoteDialog(): void {
    this.clinicalNoteDialogOpened = false;
  }

  public saveClinicalNote(): void {
    console.log('Saving clinical note for:', this.selectedPatient.name, this.clinicalNoteText);
    // Here you would typically save to a service
    this.closeClinicalNoteDialog();
  }

  public openLabTestDialog(): void {
    this.labTestDialogOpened = true;
  }

  public closeLabTestDialog(): void {
    this.labTestDialogOpened = false;
  }

  public sendLabTestRequest(): void {
    const selectedTests = this.labTests.filter((test) => test.selected);
    console.log('Sending lab test request for:', this.labTestPatient?.name, 'Tests:', selectedTests);
    // Here you would typically send via a service
    this.closeLabTestDialog();
  }

  public get filteredLabTests() {
    if (!this.labTestSearchQuery) {
      return this.labTests;
    }
    return this.labTests.filter((test) =>
      test.name.toLowerCase().includes(this.labTestSearchQuery.toLowerCase()),
    );
  }

  public toggleLabTest(test: any): void {
    test.selected = !test.selected;
  }

  public openMessageNurseDialog(): void {
    this.messageNurseDialogOpened = true;
  }

  public closeMessageNurseDialog(): void {
    this.messageNurseDialogOpened = false;
  }

  public sendMessage(): void {
    console.log(
      'Sending message to:',
      this.recipientEmail,
      'Subject:',
      this.messageSubject,
      'Description:',
      this.messageDescription,
    );
    // Here you would typically send via a service
    this.closeMessageNurseDialog();
  }

  // Alert dialog methods
  public openAlertDialog(alert: any): void {
    this.selectedAlert = alert;
    this.alertDialogOpened = true;
  }

  public closeAlertDialog(): void {
    this.alertDialogOpened = false;
  }

  public acknowledgeAlert(): void {
    console.log('Alert acknowledged:', this.selectedAlert);
    // Here you would typically update the alert status via a service
    this.closeAlertDialog();
  }

  // Reason for Visit dialog methods
  public openReasonForVisitDialog(): void {
    this.reasonForVisitDialogOpened = true;
  }

  public closeReasonForVisitDialog(): void {
    this.reasonForVisitDialogOpened = false;
  }

  // Allergy Alert dialog methods
  public openAllergyAlertDialog(): void {
    this.allergyAlertDialogOpened = true;
  }

  public closeAllergyAlertDialog(): void {
    this.allergyAlertDialogOpened = false;
  }

  // Chat popup methods
  public toggleChatPopup(): void {
    this.chatPopupOpened = !this.chatPopupOpened;
  }

  public closeChatPopup(): void {
    this.chatPopupOpened = false;
  }

  public onSendChatMessage(e: SendMessageEvent): void {
    console.log('User message:', e.message.text);

    // Add user message to chat
    this.chatMessages = [...this.chatMessages, e.message];
  }

  public onSuggestionClick(suggestion: ChatSuggestion): void {
    console.log('Suggestion clicked:', suggestion.text);

    // Add user message to chat
    this.chatMessages = [
      ...this.chatMessages,
      {
        id: guid(),
        author: this.currentUser,
        text: suggestion.text,
        timestamp: new Date(),
      },
    ];

    // Handle different suggestions
    setTimeout(() => {
      let responseText = '';

      if (suggestion.id === 1) {
        // "Summary for next patient" - return hardcoded value
        responseText = `📋 **Next Patient Summary**

**Patient:** Isabella Rossi (P-102563)
**Time:** 9:30 AM
**Visit Type:** Cardiology Follow-up

**Chief Complaint:** Post-procedure cardiac monitoring following cardiac catheterization 6 weeks ago.

**Key Points:**
• Recent cardiac catheterization - successful
• Evaluating coronary artery disease
• Review test results and medication response
• Assessment of current cardiac symptoms

**Allergies:** ⚠️ Penicillin (Severe - Anaphylaxis)

**Action Items:**
✓ Review catheterization results
✓ Evaluate ECG and recent lab work
✓ Check medication compliance
✓ Adjust treatment if necessary`;
      } else if (suggestion.id === 2) {
        // "Provide lab result for next patient"
        responseText = `🔬 **Lab Results - Isabella Rossi (P-102563)**

**Latest Lab Results** (Collected 2 days ago)

**Complete Blood Count (CBC):**
• White Blood Cell Count: 7.2 K/µL (Normal)
• Red Blood Cell Count: 4.5 M/µL (Normal)
• Hemoglobin: 13.8 g/dL (Normal)
• Platelets: 245 K/µL (Normal)

**Lipid Panel:**
• Total Cholesterol: 185 mg/dL (Good)
• LDL: 110 mg/dL (Near Optimal)
• HDL: 58 mg/dL (Good)
• Triglycerides: 85 mg/dL (Normal)

**Cardiac Markers:**
• Troponin I: < 0.01 ng/mL (Normal)
• BNP: 45 pg/mL (Normal)

**Overall Assessment:** All values within normal range. Cardiac markers show no signs of recent cardiac stress.`;
      } else if (suggestion.id === 3) {
        // "How many patients do I have today"
        responseText = `📅 **Today's Schedule Overview**

You have **12 patients** scheduled for today:

**Completed:**
• 8:00 AM - Sarah Johnson (Routine Checkup) ✓
• 8:30 AM - Michael Chen (Follow-up) ✓

**Upcoming:**
• **9:30 AM** - Isabella Rossi (Cardiology Follow-up) 🔵 *Next*
• 10:00 AM - Robert Martinez (New Patient)
• 10:30 AM - Lisa Anderson (Annual Physical)
• 11:00 AM - Daniel Brown (Lab Results Review)
• 11:30 AM - Jennifer White (Prescription Refill)

**Afternoon:**
• 2:00 PM - David Garcia (Chronic Care Management)
• 2:30 PM - Amanda Taylor (Diabetes Follow-up)
• 3:00 PM - Christopher Lee (Mental Health Check)
• 3:30 PM - Jessica Moore (Allergy Consultation)
• 4:00 PM - Matthew Wilson (Blood Pressure Monitoring)

**Status:** On schedule | **Next appointment:** 5 minutes`;
      } else {
        // For other suggestions, just acknowledge
        console.log('Processing suggestion:', suggestion.text);
        responseText = `I received your request: "${suggestion.text}". Processing...`;
      }

      this.chatMessages = [
        ...this.chatMessages,
        {
          id: guid(),
          author: this.aiAssistant,
          timestamp: new Date(),
          text: responseText,
        },
      ];
    }, 1500);
  }
}
