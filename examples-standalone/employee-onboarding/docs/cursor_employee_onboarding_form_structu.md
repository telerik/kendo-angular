# Employee onboarding form structure
_Exported on 3/30/2026 at 14:50:04 CDT from Cursor (2.6.21)_

---

**User**

#kendo_ui_generator Build a modern web app called “Employee Onboarding Form”.

Goal:
Create a multi-step employee onboarding form for HR or internal operations. The experience should feel clean, guided, and easy to complete.

Requirements:
- Build a multi-step form flow with progress indicator
- Steps should include:
  1. Personal Information
  2. Job Details
  3. Tax / Payroll Information
  4. Equipment / Access Requests
  5. Policies / Agreements
  6. Review & Submit
- Personal Information step:
  - full name
  - email
  - phone
  - address
  - emergency contact
- Job Details step:
  - department
  - job title
  - manager
  - start date
  - employment type
  - location/work mode
- Tax / Payroll step:
  - placeholder fields for tax ID, bank details, payment preferences
  - include clear note that this is mock/demo data
- Equipment / Access Requests step:
  - laptop choice
  - accessories
  - software access
  - systems/accounts needed
- Policies / Agreements step:
  - checklist/checkbox acknowledgements
  - handbook confirmation
  - security policy agreement
  - code of conduct acknowledgement
- Review & Submit step:
  - summary of all entered information
  - edit previous sections option
  - final submit action
- Include:
  - field validation
  - step-by-step navigation
  - save progress locally
  - success confirmation screen after submit
  - clean error messaging
- Make the layout responsive and user-friendly
- Use reusable form components where possible
- Include accessible labels and helpful instructions

Implementation notes:
- No backend required
- Use local state and/or local storage to preserve progress
- Keep the form realistic but safe, with mock/demo handling for sensitive fields
- Organize code clearly by steps/components
- Include a README with setup instructions and notes on where to integrate real APIs or submission handling later

Please scaffold the full multi-step app and briefly explain the structure when done.

---

**Cursor**


Scaffolding the Employee Onboarding Form with Kendo UI. Exploring the workspace and Angular/Kendo MCP tooling.




Calling the Kendo UI generator and Angular CLI MCP, then installing Kendo packages for Angular 21.




Gathering Kendo layout, styling, accessibility, and Stepper/FormField documentation, then installing Kendo packages.




Installing Kendo Angular packages and `@angular/animations`, then implementing the app structure.




Implementing the full structure: updating configuration and global styles, then adding the onboarding feature and step components.





Here’s what was implemented and how it’s organized.

## What you have

- **Six-step flow** with **Kendo Stepper** (linear), **`kendo-progressbar`** for overall completion, **Back / Next / Submit** controls, and **step click** guarded so you can’t skip ahead with invalid prior steps.
- **Reactive forms** with nested groups (`personal`, `job`, `tax`, `equipment`, `policies`), **Kendo FormField / Label / hints / errors**, **DatePicker**, **DropDownList**, **MultiSelect**, **CheckBox**, **TextBox / TextArea**.
- **Autosave** to **`localStorage`** via `OnboardingStorageService` (debounced `valueChanges` + save on step change), including **restore on load** and **`startDate`** rehydrated as a `Date`.
- **Inline error summary** (`role="alert"`) when navigation or submit is blocked.
- **Success screen** after submit (demo only: clears draft, no HTTP).
- **Styling**: `@progress/kendo-theme-default` + `@progress/kendo-theme-utils`, teal/slate-ish variables in `src/styles.css`, layout mostly **Kendo utility classes**; `onboarding-wizard.component.css` only constrains width, progress bar min-width, and a **`.k-sr-only`** helper for the form instructions.
- **README** updated with setup, Kendo licensing note, and **where to plug in real APIs** (`submit()`, payroll sensitivity, auth, server drafts).

## Folder structure

| Path | Role |
|------|------|
| `src/app/onboarding/onboarding-wizard.component.*` | Shell: stepper, progress, messages, nav, submit/success, draft persistence |
| `src/app/onboarding/onboarding-storage.service.ts` | `load` / `save` / `clear` for draft JSON |
| `src/app/onboarding/onboarding-options.ts` | Shared lists for dropdowns / multiselects |
| `src/app/onboarding/steps/*.component.*` | One step per file: personal, job, tax, equipment, policies, review |
| `src/app/app.routes.ts` | `''` lazy-loads the wizard |
| `src/styles.css` | Kendo theme imports + `:root` tokens |

`ng build` completes successfully (budgets were raised slightly so the full Kendo theme bundle is allowed).

**Note:** `ng test` in this repo expects a Vitest browser package; see the README if the CLI prompts you to install one. Configure a **Kendo license** (`setLicenseKey`) when you use this beyond trial/demo.
