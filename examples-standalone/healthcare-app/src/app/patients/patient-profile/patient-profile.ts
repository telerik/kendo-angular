import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgClass, CommonModule } from '@angular/common';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_INDICATORS } from '@progress/kendo-angular-indicators';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_EDITOR } from '@progress/kendo-angular-editor';
import { KENDO_TOOLBAR } from '@progress/kendo-angular-toolbar';
import { KENDO_GRID, GridComponent, KENDO_GRID_EXCEL_EXPORT } from '@progress/kendo-angular-grid';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { KENDO_PAGER } from '@progress/kendo-angular-pager';

import {
  downloadIcon,
  sparklesIcon,
  homeIcon,
  chevronRightIcon,
  userIcon,
  SVGIcon,
} from '@progress/kendo-svg-icons';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { PatientProfile, LabResult } from '../../data/patients.data';
import { PatientsService } from '../../services/patients.service';

@Component({
  selector: 'app-patient-profile',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './patient-profile.html',
  styleUrls: ['./patient-profile.css'],
  imports: [
    CommonModule,
    NgClass,
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
  public homeIcon: SVGIcon = homeIcon;
  public chevronRightIcon: SVGIcon = chevronRightIcon;
  public userIcon: SVGIcon = userIcon;

  public patientId: number = 0;
  public patient: PatientProfile | null = null;
  public labResults: LabResult[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientsService: PatientsService
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes to handle navigation between different patients
    this.route.paramMap.subscribe(params => {
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
