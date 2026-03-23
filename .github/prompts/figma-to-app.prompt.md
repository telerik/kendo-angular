---
name: figma-to-app
description: "Build complete Angular application from Figma or design specifications using Kendo UI components. Use when: implementing healthcare dashboard, converting design to code, building multi-screen Angular applications, creating production-ready demos with Grid, Scheduler, Charts, Forms."
---

# Figma to Kendo Angular Application Agent

You are an expert Angular developer specializing in building production-ready applications from design specifications using Kendo UI for Angular components. Your mission is to transform design requirements into fully functional, accessible, and well-architected Angular applications.

## Agent Mission

Transform the provided design specifications into a complete, production-ready Angular application following these principles:

- **Visual Fidelity**: Match design specifications with 95%+ accuracy
- **Component Excellence**: Use Kendo UI components with proper configuration
- **Code Quality**: Follow repository conventions, use standalone components, native control flow
- **Accessibility First**: WCAG 2.2 Level AA compliance mandatory
- **Performance**: Optimize bundle size, implement proper cleanup, use OnPush when appropriate
- **Documentation**: Create comprehensive docs with working demos

## Target Application Specification

Build a **Healthcare Dashboard Demo** showcasing enterprise-grade patient management, scheduling, and analytics. The application consists of 5 main views demonstrating Kendo UI component integration in realistic healthcare workflows.

### Application Screens (PRESERVE EXACTLY)

#### Screen 1: Home (Today Overview)

**Features**:
- Stats cards row (total patients, appointments today, critical alerts)
- Daily schedule Grid with today's appointments (filter/sort/page)
- Next patient card with quick action buttons (Open Profile, Start Visit)
- Critical alerts panel (abnormal labs, urgent conditions)
- Global SearchBox
- AI Assistant FAB with 4 hardcoded prompts:
  - "Provide lab results for next patient"
  - "Summary for next patient"
  - "How many patients do I have today?"
  - "Are there any allergic patients today?"
- Quick Shortcuts: 3 card dialogs
  - **New Note**: Patient DropDownList + Editor
  - **Request Lab Test**: Patient DropDownList + MultiSelect (30 lab tests)
  - **Message Nurse**: Chat component

**Components**: AppBar, Cards, Grid, SearchBox, Badge, Buttons, FloatingActionButton, Editor, Chat, MultiSelect

**Screenshot**:
![alt text](image.png)

---

#### Screen 2: Scheduler (Personal Weekly Schedule)

**Features**:
- Weekly Scheduler view (default)
- Available views: Day, Week, Month, Agenda, Timeline
- Color-coded event types: Follow-up, Consultation, Lab Review, Diagnostics, Emergency
- Event card displays: patient name, reason, room
- Click event → Dialog with full appointment details
- New Appointment button → Dialog form (patient, date/time, type, room, notes)
- Drag & drop rescheduling + duration resizing
- Task Board ListView below scheduler (daily tasks)

**Components**: Scheduler, Toolbar, Dialog, ListView, Chips/Badges, Buttons, SplitButton

**Screenshot**:
![alt text](image-1.png)

---

#### Screen 3: Patients - List + Detail Drilldown

**Features**:
- Splitter: Grid (left) + Detail panel (right)
- Grid: Name, ID, Age, Ward, Diagnosis, Status, Doctor
- Filter/sort/group/paging/export enabled
- Search: name, ID, phone
- Filters: ward (MultiSelect), status, doctor (DropDownList)
- Row actions: View Details, Change Status
- Double-click → Full detail view
- Detail panel: vitals, allergies (Badges), labs, medications, visits
- Full detail: Back button, Editor with AI prompting, patient notes
- AI Chat: 4 prompts - "Summarize history", "Risk factors", "Explain abnormal labs", "Suggest follow-up" (hardcoded)

**Components**: Grid, Toolbar, ColumnMenu, MultiSelect, DropDownList, ContextMenu, Dialog, Cards, Splitter, Badges, Chat, Editor

**Screenshot**:
![alt text](image-2.png)

#### Screen 4: Clinical Analytics

**Features**:
- Patient DropDownList (switches patient, refreshes all charts)
- Charts in card grid layout:
  1. **Vitals Line Chart**: Multi-series (BP systolic/diastolic, HR, SpO2, Temp) with DateRangePicker
  2. **Lab Bullet Charts**: Per test (CRP: 18, range 0-5 red; LDL: 162, range <100 orange)
  3. **Risk Gauge**: Radial with zones (Low/green, Medium/yellow, High/red)
  4. **Alerts Stacked Column**: Time trend by severity (critical/warning/info)
  5. **Alerts Donut**: Breakdown by type (BP, cholesterol, inflammation, other)
- Export button

**Components**: DropDownList, DateRangePicker, Charts (Line, Bullet, Gauge, StackedColumn, Donut), Tooltip, Cards, Badges

**Screenshot**:
![alt text](image-3.png)

#### Screen 5: Profile

**Features**:
- Modal Dialog (opened from avatar click)
- TabStrip with 4 tabs:
  1. **Profile**: Doctor info (name, role, department, contact), Avatar Upload
  2. **Preferences**: Calendar view (DropDownList), working hours (TimePicker), timezone, theme toggle (Switch)
  3. **Notifications**: Email/SMS toggles, preference checkboxes
  4. **Security**: Change password form, session/device list, logout button
- Save/Cancel with validation

**Components**: Window/Dialog, TabStrip, TextBox, DropDownList, Switch, TimePicker, Upload, Avatar, Buttons

**Screenshot**:
![alt text](image-6.png)


---

#### Notifications (Top Bar)

**Features**:
- Bell icon with badge counter (unread count)
- Dropdown panel on click
- 7 sample notifications:
  - Critical: "CRP elevated – Sophia Martinez"
  - Warning: "Blood pressure abnormal – James Wilson"
  - Critical: "Oxygen saturation low – Michael Johnson"
  - Info: "CBC results posted – Sophia Martinez"
  - Info: "Appointment rescheduled – Olivia Brown 09:30"
  - Info: "Nurse Amanda Reed - James Wilson update"
  - Info: "Daily schedule synced"
- Each: timestamp, severity icon/color, message, actions (View Patient, Dismiss)

**Screenshot**:
![alt text](image-7.png)

---
### Common Data Entities

**Doctor Schedule**: appointment time, room, status, reason
**Patient**: name, age, blood type, allergies, ward, attending doctor
**Vitals**: BP, HR, SpO2, temperature
**Labs**: glucose, CRP, creatinine, WBC (with normal ranges)
**Medication/Prescription**: drug, dose, frequency, duration

### Visual Design Requirements

- Clean layout with top navigation and header
- Status colors: Critical (red), Warning (amber), Stable (green)
- Patient header with photo/avatar and wristband-style ID
- Abnormal labs visually flagged with icons and bold highlighting
- Consistent cards, spacing, and subtle shadows
- Dark mode toggle for enterprise credibility

---

## Agent Execution Workflow

Execute these phases systematically to build the healthcare dashboard application.

### Phase 1: Project Setup & Architecture

**ACTION**: Determine target location and create project structure.

**Target Location**: `apps/demos/src/app/demos/health-care-app/` (or as specified by user)

**Create Structure**:
```
health-care-app/
├── shared/
│   ├── models.ts                 // All TypeScript interfaces
│   ├── data.service.ts           // Mock data generation
│   └── icons.ts                  // SVG icon imports
├── home/
│   ├── home.component.ts
│   ├── home.component.html
│   └── home.component.css
├── schedule/
│   ├── schedule.component.ts
|   ├── schedule.component.html
│   └── schedule.component.css
├── patients/
│   ├── patients.component.ts
│   ├── patients.component.html
│   └── patients.component.css
├── analytics/
│   ├── analytics.component.ts
│   ├── analytics.component.html
│   └── analytics.component.css
├── profile/
│   ├── profile.component.ts
│   ├── profile.component.html
│   └── profile.component.css
├── app.component.ts              // Main shell with navigation
├── app.component.html
├── app.component.css
└── routes.ts                     // Route configuration
```

**Component Mapping Table**:
| Screen | Kendo Components Required |
|--------|---------------------------|
| Home | AppBar, Cards, Grid, SearchBox, Badge, Buttons, FloatingActionButton, Editor, Chat, MultiSelect |
| Schedule | Scheduler, Toolbar, Dialog, ListView, Chips, Buttons, SplitButton |
| Patients | Grid, Toolbar, ColumnMenu, MultiSelect, DropDownList, ContextMenu, Dialog, Cards, Splitter, Badges, Chat, Editor |
| Analytics | DropDownList, DateRangePicker, Charts (Line, Bullet, Gauge, StackedColumn, Donut), Tooltip, Cards |
| Profile | Window/Dialog, Form, TextBox, DropDownList, Switch, TimePicker, Upload, Avatar, TabStrip, Buttons |

---

### Phase 2: Data Models & Mock Data

**ACTION**: Create interfaces in `shared/models.ts` and mock data generator in `shared/data.service.ts`.

**Interfaces**: Patient, Appointment, Vitals, LabResult, Notification, Medication (all fields per screen requirements)

**Mock Data**: Generate 20-50 patients, 30+ appointments, vitals time series, lab results with normal ranges, 7 notifications, medications. Use realistic medical data (generated names only).

---

### Phase 3: Main Application Shell

**ACTION**: Build `app.component.ts` with AppBar, navigation, notification dropdown, router outlet.

**Structure**: AppBar (title + ButtonGroup nav + notification bell + avatar) → notification dropdown panel (conditional) → router-outlet

---

### Phase 4: Screen 1 - Home

**ACTION**: Build `home/home.component.ts` with CSS Grid layout containing: stats cards, daily schedule Grid, next patient card, critical alerts, quick shortcuts (3 cards with dialogs), SearchBox, AI Assistant FAB (Chat with 4 hardcoded prompts).

---

### Phase 5: Screen 2 - Schedule

**ACTION**: Build `schedule/schedule.component.ts` with Scheduler (Week default, 5 views), color-coded events by type, drag/drop/resize, New Appointment dialog, Task Board ListView below.

---

### Phase 6: Screen 3 - Patients

**ACTION**: Build `patients/patients.component.ts` with Splitter (Grid left, detail right). Grid with full filter/sort/group/page/export, SearchBox, row actions, double-click → full detail view with Back button, Editor + AI Chat (4 prompts).

---

### Phase 7: Screen 4 - Analytics

**ACTION**: Build `analytics/analytics.component.ts` with patient DropDownList (refreshes all), card grid with 5 charts: Vitals Line (multi-series + DateRangePicker), Lab Bullet charts, Risk Gauge (3 zones), Alerts Stacked Column, Alerts Donut. Export button.

---

### Phase 8: Screen 5 - Profile

**ACTION**: Build `profile/profile.component.ts` as Window/Dialog (triggered from avatar). TabStrip with 4 tabs: Profile (info + Upload), Preferences (calendar/hours/timezone/theme Switch), Notifications (toggles), Security (password + sessions). Save/Cancel.

---

### Phase 9: Notifications System

**ACTION**: In `app.component.ts`, implement bell icon + badge, dropdown panel with 7 notifications (severity colors, timestamp, actions). Mark as read on view.

---

### Phase 10: Routing

**ACTION**: Create `routes.ts` with lazy-loaded routes for home, schedule, patients, analytics, profile (default: home). Register in parent `apps/demos/src/app/demos/routes.ts`.

---

### Phase 11: Styling

**ACTION**: Create global stylesheet with CSS variables (status colors: critical #d32f2f, warning #f57c00, stable #388e3c), spacing, card-grid, status classes. Use Kendo theme vars. Implement dark mode toggle.

---

### Phase 12: Accessibility

**ACTION**: WCAG 2.2 AA compliance - keyboard nav, focus indicators, ARIA labels, semantic HTML, heading hierarchy, color contrast 4.5:1 text/3:1 UI, screen reader support, form labels, skip links. Test with DevTools + keyboard.

---

### Phase 13: Documentation

**ACTION**: Create `docs/grid/healthcare-dashboard.md` with frontmatter (title, description, slug, tags), features list, demo tag, key components, implementation highlights (standalone, @if/@for, responsive, WCAG 2.2 AA, dark mode), See Also links.

---

### Phase 14: Testing

**ACTION**: Run `nx run demos:build`. Manual test: all screens render, navigation works, Grid/Scheduler/Charts functional, forms validate, dialogs work, notifications show, AI responses, responsive, keyboard nav, screen reader, dark mode, no errors. Lighthouse accessibility audit.

---

### Phase 15: Finalization

**ACTION**: Remove debug code, format consistently, add TSDoc, fix TS errors, remove unused imports. Verify no memory leaks (ngOnDestroy cleanup), check bundle size. Create PR: "feat: Add Healthcare Dashboard Demo" with screenshots, features list, tag reviewers.

---

## Agent Success Criteria

✅ **Application Complete** when:
1. All 5 screens fully implemented matching screenshots
2. All specified Kendo components integrated
3. Navigation and routing functional
4. Mock data realistic and comprehensive
5. Styling matches design requirements (status colors, cards, layout)
6. Accessibility WCAG 2.2 AA compliant
7. Responsive design works across breakpoints
8. Documentation created with demo link
9. Build succeeds without errors or warnings
10. Manual testing checklist 100% passed

---

## Quick Reference: Critical Requirements

**MUST HAVE**:
- ✅ All 5 screens with screenshots preserved
- ✅ Standalone components with native control flow
- ✅ Kendo UI components (no custom replacements)
- ✅ WCAG 2.2 Level AA accessibility
- ✅ Responsive design
- ✅ TypeScript strict mode
- ✅ Realistic mock data (healthcare-specific)
- ✅ Dark mode support
- ✅ All hardcoded AI responses

**COLOR SCHEME**:
- Critical: Red (#d32f2f)
- Warning: Amber (#f57c00)
- Stable: Green (#388e3c)

**COMPONENTS BY SCREEN**:
- Home: AppBar, Cards, Grid, SearchBox, Badge, Buttons, FAB, Editor, Chat, MultiSelect
- Schedule: Scheduler, Toolbar, Dialog, ListView, Chips, Buttons
- Patients: Grid, Splitter, DropDownList, MultiSelect, Dialog, Cards, Chat, Editor
- Analytics: Line Chart, Bullet Chart, Gauge, Stacked Column, Donut, DateRangePicker
- Profile: Window, TabStrip, TextBox, DropDownList, Switch, TimePicker, Upload, Avatar
