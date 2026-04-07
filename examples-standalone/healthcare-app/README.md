<div align="center">
  <a href="https://www.telerik.com/kendo-angular-ui/"><img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/productsimages/kendo-ui-for-angular/kendoka_with_logo-min.png?sfvrsn=568f4b7c_1" height="60" alt="Kendo UI for Angular" /></a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://angular.io/"><img src="https://www.vectorlogo.zone/logos/angular/angular-icon.svg" height="60" alt="Angular" /></a>
</div>

<h1 align="center">Healthcare Application — Kendo UI for Angular</h1>

<p align="center">
  A full-featured healthcare dashboard built with <a href="https://www.telerik.com/kendo-angular-ui/components">Kendo UI for Angular</a>, designed to demonstrate how clinical workflows can be modeled in a modern Angular application.
  <br />
  <a href="https://telerik.github.io/kendo-angular/healthcare-app"><strong>View Live Demo »</strong></a>
</p>

<p align="center">
  The app is organized into four main views:
</p>

<ul>
  <li><strong>Home</strong> — Personalized dashboard for a physician, featuring quick-action cards (add clinical notes, request lab tests), upcoming appointments, and an at-a-glance patient summary.</li>
  <li><strong>Patients</strong> — A searchable, sortable, and filterable grid of patients with vitals, risk levels, and lab results. Includes an AI Assistance panel and Excel export.</li>
  <li><strong>Patient Profile</strong> — Detailed view of an individual patient showing basic information, recent vitals (heart rate, blood pressure, O2 saturation, temperature), and medical history.</li>
  <li><strong>Schedule</strong> — A multi-view scheduler (day, week, month, agenda) for managing appointments, paired with a daily task list that supports search and inline task creation.</li>
  <li><strong>Clinical Analytics</strong> — Charts tracking patient vitals over time (systolic/diastolic BP, heart rate, SpO2, temperature) and a risk assessment overview with export support.</li>
</ul>

---

## Components Used

| Component | Docs |
|-----------|------|
| Breadcrumb | [Breadcrumb](https://www.telerik.com/kendo-angular-ui/components/navigation/breadcrumb/) |
| Buttons | [Buttons](https://www.telerik.com/kendo-angular-ui/components/buttons/button/) |
| Dialog | [Dialog](https://www.telerik.com/kendo-angular-ui/components/dialog/) |
| DropDowns | [DropDowns](https://www.telerik.com/kendo-angular-ui/components/dropdowns/) |
| Editor | [Editor](https://www.telerik.com/kendo-angular-ui/components/editor/) |
| Gauges | [Gauges](https://www.telerik.com/kendo-angular-ui/components/gauges/) |
| Grid | [Grid Component](https://www.telerik.com/kendo-angular-ui/components/grid/) |
| Icons | [Icons](https://www.telerik.com/kendo-angular-ui/components/icons/icon/) |
| Indicators | [Indicators](https://www.telerik.com/kendo-angular-ui/components/indicators/) |
| Inputs | [Inputs](https://www.telerik.com/kendo-angular-ui/components/inputs/) |
| Layout | [Layout](https://www.telerik.com/kendo-angular-ui/components/layout/) |
| Scheduler | [Scheduler](https://www.telerik.com/kendo-angular-ui/components/scheduler/) |
| Toolbar | [Toolbar](https://www.telerik.com/kendo-angular-ui/components/toolbar/) |

---

## Getting Started

> The sample project runs with the [currently supported Angular version](https://www.telerik.com/kendo-angular-ui/components/installation/requirements/#toc-angular).

```bash
# 1. Clone the repository
git clone https://github.com/telerik/kendo-angular.git

# 2. Navigate to the project folder
cd examples-standalone/healthcare-app

# 3. Install dependencies
npm install
```

## Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app reloads automatically when source files change.

## Build

```bash
ng build
```

Build artifacts are stored in the `dist/` directory.

