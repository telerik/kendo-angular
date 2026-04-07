import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChipThemeColor, KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_EDITOR } from '@progress/kendo-angular-editor';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { GridComponent, KENDO_GRID, KENDO_GRID_EXCEL_EXPORT } from '@progress/kendo-angular-grid';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_INDICATORS } from '@progress/kendo-angular-indicators';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { BreadCrumbItem, KENDO_BREADCRUMB } from '@progress/kendo-angular-navigation';
import { KENDO_PAGER } from '@progress/kendo-angular-pager';
import { KENDO_TOOLBAR } from '@progress/kendo-angular-toolbar';

import { downloadIcon, homeIcon, sparklesIcon, SVGIcon, userIcon } from '@progress/kendo-svg-icons';
import { LabResult, PatientProfile } from '../../data/patients.data';
import { PatientsService } from '../../services/patients.service';

@Component({
  selector: 'app-patient-profile',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './patient-profile.html',
  styleUrls: ['./patient-profile.css'],
  imports: [
    CommonModule,
    KENDO_BREADCRUMB,
    KENDO_BUTTONS,
    KENDO_ICONS,
    KENDO_INDICATORS,
    KENDO_LAYOUT,
    KENDO_EDITOR,
    KENDO_TOOLBAR,
    KENDO_GRID,
    KENDO_GRID_EXCEL_EXPORT,
    KENDO_PAGER,
  ],
})
export class PatientProfileComponent implements OnInit {
  @ViewChild(GridComponent) private grid!: GridComponent;

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

  public breadcrumbItems: BreadCrumbItem[] = [
    { text: 'Patients', svgIcon: homeIcon, title: 'Patients' },
    { text: 'Patient Profile', svgIcon: userIcon, title: 'Patient Profile' },
  ];

  public patientId: number = 0;
  public patient: PatientProfile | null = null;
  public labResults: LabResult[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientsService: PatientsService,
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes to handle navigation between different patients
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.patientId = parseInt(id, 10);
        this.loadPatientData();
      }
    });
  }

  private loadPatientData(): void {
    const patientData = this.patientsService.getPatientById(this.patientId);
    if (patientData) {
      this.patient = patientData;
      this.labResults = patientData.labResults;
    } else {
      // Patient not found, navigate back to patients list
      this.router.navigate(['/patients']);
    }
  }

  public navigateToPatients(): void {
    this.router.navigate(['/patients']);
  }

  public onBreadcrumbItemClick(item: BreadCrumbItem): void {
    if (item.text === 'Patients') {
      this.navigateToPatients();
    }
  }

  public saveNotes(): void {
    console.log('Saving patient notes...');
    // In a real app, save to backend service
  }

  public exportToExcel(): void {
    this.grid.saveAsExcel();
  }

  public allData = (): ExcelExportData => {
    return {
      data: this.labResults,
    };
  };
}
