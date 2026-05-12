import { Component, ViewEncapsulation, OnInit, OnDestroy, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { KENDO_GRID, GridComponent, KENDO_GRID_EXCEL_EXPORT } from '@progress/kendo-angular-grid';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { ChipThemeColor, KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
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
import { PageHeaderService } from '../services/page-header.service';
import { PatientsService } from '../services/patients.service';
import { MarkdownPipe } from '../pipes/markdown.pipe';
import { SortDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'app-patients',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './patients.html',
  styleUrls: ['./patients.css'],
  imports: [
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
export class PatientsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(GridComponent) private grid!: GridComponent;
  @ViewChild('patientsActions') patientsActions!: TemplateRef<any>;

  public eyeIcon: SVGIcon = eyeIcon;
  public downloadIcon: SVGIcon = downloadIcon;
  public sparklesIcon: SVGIcon = sparklesIcon;

  public getPatientStatusColor(status: string): ChipThemeColor {
    const colorMap: Record<string, ChipThemeColor> = {
      Stable: 'success',
      Monitoring: 'warning',
      Critical: 'error',
    };
    return colorMap[status] ?? 'base';
  }
  public patients: Patient[] = [];
  public sort: SortDescriptor[] = [{ field: 'age', dir: 'desc' }];

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
      text: `I can help you review patient statuses, identify critical cases, and summarize ward activity. Try one of the suggestions below!`,
    },
  ];

  public chatSuggestions: ChatSuggestion[] = [
    { id: 1, text: 'Show ward distribution' },
    { id: 2, text: 'List critical patients' },
    { id: 3, text: 'Summarize patient statuses' },
    { id: 4, text: 'Show diagnoses overview' },
  ];

  constructor(
    private pageHeaderService: PageHeaderService,
    private router: Router,
    private patientsService: PatientsService
  ) {}

  ngOnInit(): void {
    this.pageHeaderService.title.set('Patients');
    this.pageHeaderService.subtitle.set('Monitor patient trends, vitals, lab results, and risk levels in one place');
    this.patients = this.patientsService.getAllPatients();
  }

  ngAfterViewInit(): void {
    this.pageHeaderService.actions.set(this.patientsActions);
  }

  ngOnDestroy(): void {
    this.pageHeaderService.title.set('');
    this.pageHeaderService.subtitle.set('');
    this.pageHeaderService.actions.set(null);
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
    this.chatMessages = [...this.chatMessages, e.message];

    setTimeout(() => {
      this.chatMessages = [
        ...this.chatMessages,
        {
          id: guid(),
          author: this.aiAssistant,
          timestamp: new Date(),
          text: `ℹ️ **This is a demo assistant.**

Free-text queries are not supported in this preview. In your production app, connect a **real AI service** (e.g. OpenAI, Azure OpenAI, or your own clinical LLM) to handle any message.

**In this demo, you can use the suggestion chips** to see pre-built responses.`,
        },
      ];
    }, 800);
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
        const wardCounts: Record<string, number> = {};
        this.patients.forEach(p => {
          wardCounts[p.ward] = (wardCounts[p.ward] || 0) + 1;
        });
        const wardList = Object.entries(wardCounts)
          .sort((a, b) => b[1] - a[1])
          .map(([ward, count]) => `• **${ward}**: ${count} patient${count > 1 ? 's' : ''}`)
          .join('\n');
        responseText = `🏥 **Ward Distribution**

**Total Patients:** ${this.patients.length}

${wardList}

Use the grid filters to view patients by a specific ward.`;
      } else if (suggestion.id === 2) {
        const criticalPatients = this.patients.filter(p => p.status === 'Critical');
        responseText = `🚨 **Critical Patients** (${criticalPatients.length})

${criticalPatients.map((p, i) => `${i + 1}. **${p.name}** — ${p.diagnosis}, ${p.ward} (Age ${p.age})`).join('\n')}

These patients require immediate attention. Click **View Profile** to review their vitals and lab results.`;
      } else if (suggestion.id === 3) {
        const critical = this.patients.filter(p => p.status === 'Critical').length;
        const monitoring = this.patients.filter(p => p.status === 'Monitoring').length;
        const stable = this.patients.filter(p => p.status === 'Stable').length;
        responseText = `📊 **Patient Status Summary**

| Status | Count |
|---|---|
| 🔴 Critical | ${critical} |
| 🟡 Monitoring | ${monitoring} |
| 🟢 Stable | ${stable} |
| **Total** | **${this.patients.length}** |

${critical > 0 ? `⚠️ ${critical} patient${critical > 1 ? 's require' : ' requires'} urgent review.` : '✅ No critical patients at this time.'}`;
      } else if (suggestion.id === 4) {
        const diagnosisCounts: Record<string, number> = {};
        this.patients.forEach(p => {
          diagnosisCounts[p.diagnosis] = (diagnosisCounts[p.diagnosis] || 0) + 1;
        });
        const diagnosisList = Object.entries(diagnosisCounts)
          .sort((a, b) => b[1] - a[1])
          .map(([diagnosis, count]) => `• **${diagnosis}**: ${count} patient${count > 1 ? 's' : ''}`)
          .join('\n');
        responseText = `🩺 **Diagnoses Overview**

${diagnosisList}

Use the **Diagnosis** column filter in the grid to focus on a specific condition.`;
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
