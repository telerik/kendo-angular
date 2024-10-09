import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { profileBase64 } from '../resources/profile-base64';

@Injectable({
  providedIn: 'root',
})
export class ProfileImageService {
  private profileImageSubject = new BehaviorSubject<string>(profileBase64);
  public profileImage$ = this.profileImageSubject.asObservable();

  public updateProfileImage(image: string): void {
    this.profileImageSubject.next(image);
  }
}
