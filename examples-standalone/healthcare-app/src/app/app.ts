import { Component, signal, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { KENDO_BUTTONS, SegmentedItemSettings } from '@progress/kendo-angular-buttons';
import { KENDO_DIALOG } from '@progress/kendo-angular-dialog';
import { KENDO_DROPDOWNS } from '@progress/kendo-angular-dropdowns';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_INDICATORS } from '@progress/kendo-angular-indicators';
import { KENDO_INPUTS } from '@progress/kendo-angular-inputs';
import { KENDO_LABELS } from '@progress/kendo-angular-label';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_NAVIGATION } from '@progress/kendo-angular-navigation';
import { KENDO_POPUP } from '@progress/kendo-angular-popup';
import { PatientsService } from './services/patients.service';
import { Patient } from './data/patients.data';
import {
  bellIcon,
  brightnessContrastIcon,
  calendarIcon,
  chartLineMarkersIcon,
  eyeSlashIcon,
  filterIcon,
  homeIcon,
  searchIcon,
  SVGIcon,
  uploadIcon,
  userIcon,
} from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    KENDO_NAVIGATION,
    KENDO_BUTTONS,
    KENDO_DROPDOWNS,
    KENDO_ICONS,
    KENDO_INPUTS,
    KENDO_INDICATORS,
    KENDO_LAYOUT,
    KENDO_DIALOG,
    KENDO_LABELS,
    KENDO_POPUP,
  ],
})
export class App implements OnInit {
  // Icons
  public homeIcon: SVGIcon = homeIcon;
  public calendarIcon: SVGIcon = calendarIcon;
  public userIcon: SVGIcon = userIcon;
  public chartIcon: SVGIcon = chartLineMarkersIcon;
  public searchIcon: SVGIcon = searchIcon;
  public filterIcon: SVGIcon = filterIcon;
  public themeIcon: SVGIcon = brightnessContrastIcon;
  public contrastIcon: SVGIcon = eyeSlashIcon;
  public bellIcon: SVGIcon = bellIcon;
  public uploadIcon: SVGIcon = uploadIcon;

  // Navigation items for Segmented Control
  public navItems: SegmentedItemSettings[] = [
    { svgIcon: homeIcon, text: 'Home', title: 'Home' },
    { svgIcon: calendarIcon, text: 'Schedule', title: 'Schedule' },
    { svgIcon: userIcon, text: 'Patients', title: 'Patients' },
    { svgIcon: chartLineMarkersIcon, text: 'Clinical Analytics', title: 'Clinical Analytics' },
  ];

  public selectedNavIndex = 0;
  public customContrastIcon: SVGIcon = {
    name: 'custom-contrast',
    viewBox: '0 0 16 16',
    content: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1764_44065)">
<path d="M6.00065 10.6667C8.57798 10.6667 10.6673 8.57734 10.6673 6.00001C10.6673 3.42268 8.57798 1.33334 6.00065 1.33334C3.42332 1.33334 1.33398 3.42268 1.33398 6.00001C1.33398 8.57734 3.42332 10.6667 6.00065 10.6667Z" stroke="#232A36" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0007 14.6667C12.578 14.6667 14.6673 12.5773 14.6673 10C14.6673 7.42268 12.578 5.33334 10.0007 5.33334C7.42332 5.33334 5.33398 7.42268 5.33398 10C5.33398 12.5773 7.42332 14.6667 10.0007 14.6667Z" stroke="#232A36" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1764_44065">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>`,
  };

  // Search state
  public searchValue = signal('');
  public selectedPatient: Patient | null = null;
  public patients: Patient[] = [];

  // Opacity mode toggle
  public opacityMode = signal(false);

  // Profile dialog state
  public profileDialogOpened = false;

  // Notifications state
  @ViewChild('notificationAnchor', { read: ElementRef }) notificationAnchor!: ElementRef;
  public notificationsOpened = false;
  public notifications = [
    {
      id: 1,
      title: 'Follow-up Reminder',
      description: 'A follow-up consultation is recom...',
      time: '5 min ago',
    },
    {
      id: 2,
      title: 'Extended Request',
      description: 'Based on Emma\'s current conditi...',
      time: '35 min ago',
    },
    {
      id: 3,
      title: 'Medication Check',
      description: 'Ensure patient is taking medications...',
      time: '1 h ago',
    },
  ];

  constructor(private router: Router, private patientsService: PatientsService) {
    // Set initial selected nav based on current route
    this.updateSelectedNavFromRoute();
    // Load patients data for combobox
    this.patients = this.patientsService.getAllPatients();
  }

  ngOnInit(): void {
    // Subscribe to router events to update navigation on route changes
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSelectedNavFromRoute();
      });
  }

  // Profile data for logged-in user (Dr. Carter)
  public profileFullName = 'Emily Carter';
  public profileEmail = 'drcarter@email.com';
  public profilePhone = '+(555) 776-90-84';

  public toggleOpacityMode(): void {
    this.opacityMode.update((v) => !v);
  }

  // Handle navigation item selection
  public onNavChange(index: number): void {
    this.selectedNavIndex = index;
    const routes = ['/', '/schedule', '/patients', '/analytics'];
    this.router.navigate([routes[index]]);
  }

  // Update selected nav index based on current route
  private updateSelectedNavFromRoute(): void {
    const routes = ['/', '/schedule', '/patients', '/analytics'];
    const currentRoute = this.router.url;
    const index = routes.findIndex((route) =>
      route === '/' ? currentRoute === '/' : currentRoute.startsWith(route),
    );
    if (index !== -1) {
      this.selectedNavIndex = index;
    }
  }

  // Handle patient selection from combobox
  public onPatientSelect(value: Patient | null | undefined): void {
    // With valuePrimitive=false, the ComboBox emits the full Patient object
    if (value && typeof value === 'object' && value.id) {
      console.log('Navigating to patient:', value);
      this.selectedPatient = value;
      // Simply navigate - Angular will handle route reuse properly
      this.router.navigate(['/patients', value.id]);
    } else if (value === null || value === undefined) {
      // User cleared the search
      this.selectedPatient = null;
    }
  }

  // Profile dialog methods
  public openProfileDialog(): void {
    this.profileDialogOpened = true;
  }

  public closeProfileDialog(): void {
    this.profileDialogOpened = false;
  }

  public clearProfileForm(): void {
    this.profileFullName = '';
    this.profileEmail = '';
    this.profilePhone = '';
  }

  public submitProfile(): void {
    console.log('Submitting profile:', {
      name: this.profileFullName,
      email: this.profileEmail,
      phone: this.profilePhone,
    });
    this.closeProfileDialog();
  }

  public uploadImage(): void {
    console.log('Upload image clicked');
    // Here you would typically open a file picker
  }

  // Notification methods
  public toggleNotifications(): void {
    this.notificationsOpened = !this.notificationsOpened;
  }

  public closeNotifications(): void {
    this.notificationsOpened = false;
  }

  public markAllAsRead(): void {
    console.log('Mark all as read clicked');
    // Here you would typically update the notification status
    this.closeNotifications();
  }
}
