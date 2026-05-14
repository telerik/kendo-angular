import { ChangeDetectionStrategy, Component, inject, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnboardingStorageService } from './onboarding/onboarding-storage.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly onboardingStorage = inject(OnboardingStorageService);

  constructor() {
    if (isDevMode()) {
      this.onboardingStorage.clear();
    }
  }
}
