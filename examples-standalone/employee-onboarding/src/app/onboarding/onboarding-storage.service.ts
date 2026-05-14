import { Injectable } from '@angular/core';

export const ONBOARDING_STORAGE_KEY = 'employee-onboarding-form-draft-v1';

export type OnboardingFormSnapshot = Record<string, unknown>;

export interface OnboardingDraft {
  version: 1;
  currentStep: number;
  formValue: OnboardingFormSnapshot;
}

@Injectable({ providedIn: 'root' })
export class OnboardingStorageService {
  load(): OnboardingDraft | null {
    try {
      const raw = sessionStorage.getItem(ONBOARDING_STORAGE_KEY);
      if (!raw) {
        return null;
      }
      const data = JSON.parse(raw) as OnboardingDraft;
      if (data?.version !== 1 || typeof data.currentStep !== 'number' || !data.formValue) {
        return null;
      }
      return data;
    } catch {
      return null;
    }
  }

  save(draft: Omit<OnboardingDraft, 'version'>): void {
    try {
      const payload: OnboardingDraft = { version: 1, ...draft };
      sessionStorage.setItem(ONBOARDING_STORAGE_KEY, JSON.stringify(payload));
    } catch {
      /* quota or private mode */
    }
  }

  clear(): void {
    sessionStorage.removeItem(ONBOARDING_STORAGE_KEY);
  }
}
