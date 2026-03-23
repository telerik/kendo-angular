import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { KENDO_GRID, GridComponent, KENDO_GRID_EXCEL_EXPORT } from '@progress/kendo-angular-grid';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_INDICATORS } from '@progress/kendo-angular-indicators';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_PAGER } from '@progress/kendo-angular-pager';
import {
  KENDO_CONVERSATIONALUI,
  Message,
  SendMessageEvent,
  User,
  ChatSuggestion,
} from '@progress/kendo-angular-conversational-ui';
import { guid } from '@progress/kendo-angular-common';
import {
  eyeIcon,
  downloadIcon,
  sparklesIcon,
  SVGIcon,
} from '@progress/kendo-svg-icons';
import { Patient } from '../data/patients.data';
import { PatientsService } from '../services/patients.service';
import { MarkdownPipe } from '../pipes/markdown.pipe';

@Component({
  selector: 'app-patients',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './patients.html',
  styleUrls: ['./patients.css'],
  imports: [
    NgClass,
    KENDO_GRID,
    KENDO_GRID_EXCEL_EXPORT,
    KENDO_BUTTONS,
    KENDO_ICONS,
    KENDO_INDICATORS,
    KENDO_LAYOUT,
    KENDO_PAGER,
    KENDO_LAYOUT,
    KENDO_CONVERSATIONALUI,
    MarkdownPipe,
  ],
})
export class PatientsComponent implements OnInit {
  @ViewChild(GridComponent) private grid!: GridComponent;

  public eyeIcon: SVGIcon = eyeIcon;
  public downloadIcon: SVGIcon = downloadIcon;
  public sparklesIcon: SVGIcon = sparklesIcon;
  public patients: Patient[] = [];

  // Chat properties
  public chatVisible = false;
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
      text: `👋 Hello! I'm your AI Assistant`
    },
    {
      id: guid(),
      author: this.aiAssistant,
      text: `I can help you with your daily clinical tasks, patient information, and quick actions. Try one of the suggestions below!`,
    },
  ];

  public chatSuggestions: ChatSuggestion[] = [
    { id: 1, text: 'Summarize patient history' },
    { id: 2, text: 'Highlight risk patients' },
    { id: 3, text: 'Show critical cases' },
  ];

  constructor(
    private router: Router,
    private patientsService: PatientsService
  ) {}

  ngOnInit(): void {
    this.patients = this.patientsService.getAllPatients();
  }

  public viewProfile(patientId: number): void {
    this.router.navigate(['/patients', patientId]);
  }

  public exportToExcel(): void {
    this.grid.saveAsExcel();
  }

  public allData = (): ExcelExportData => {
    return {
      data: this.patients,
    };
  };

  public toggleChat(): void {
    this.chatVisible = !this.chatVisible;
  }

  public onSendChatMessage(e: SendMessageEvent): void {
    console.log('User message:', e.message.text);
    this.chatMessages = [...this.chatMessages, e.message];

    // Simulate AI response
    setTimeout(() => {
      const responseMessage: Message = {
        id: guid(),
        author: this.aiAssistant,
        text: 'I can help you analyze patient data, identify trends, and provide insights based on the current patient list.',
        timestamp: new Date(),
      };
      this.chatMessages = [...this.chatMessages, responseMessage];
    }, 1000);
  }

  public onSuggestionClick(suggestion: ChatSuggestion): void {
    console.log('Suggestion clicked:', suggestion.text);

    this.chatMessages = [
      ...this.chatMessages,
      {
        id: guid(),
        author: this.currentUser,
        text: suggestion.text,
        timestamp: new Date(),
      },
    ];

    setTimeout(() => {
      let responseText = '';

      if (suggestion.id === 1) {
        responseText = `📋 **Patient History Summary**

Based on the current patient list, I can see **${this.patients.length} patients** with varying conditions and statuses.

**Key Insights:**
• Multiple patients across different wards (Cardiology, Oncology, Endocrinology, etc.)
• Range of ages from young adults to seniors
• Various blood types and conditions being monitored

Would you like me to focus on a specific patient or condition?`;
      } else if (suggestion.id === 2) {
        const criticalPatients = this.patients.filter(p => p.status === 'Critical');
        responseText = `⚠️ **High Risk Patients**

I've identified **${criticalPatients.length} critical patients** requiring immediate attention:

${criticalPatients.map((p, i) => `${i + 1}. **${p.name}** - ${p.diagnosis} (${p.ward})`).join('\n')}

These patients should be prioritized for rounds and monitoring.`;
      } else if (suggestion.id === 3) {
        const criticalPatients = this.patients.filter(p => p.status === 'Critical');
        responseText = `🚨 **Critical Cases Overview**

**Total Critical Cases:** ${criticalPatients.length}

${criticalPatients.map((p, i) => `
**${i + 1}. ${p.name}**
• Age: ${p.age} years
• Ward: ${p.ward}
• Diagnosis: ${p.diagnosis}
• Blood Type: ${p.bloodType}
`).join('\n')}

Immediate attention recommended for all listed patients.`;
      }

      const responseMessage: Message = {
        id: guid(),
        author: this.aiAssistant,
        text: responseText,
        timestamp: new Date(),
      };
      this.chatMessages = [...this.chatMessages, responseMessage];
    }, 1000);
  }
}
