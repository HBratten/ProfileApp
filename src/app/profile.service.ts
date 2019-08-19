import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  userProfile: object = {
    name: "Hillary Bratten",
    contactInfo: "hillary.bratten@gmail.com",
    bio: "Information about ME!"
  };

  constructor(private router: Router) {}

  editProfile(): void {
    this.router.navigate(["/edit"]);
  }
  getUserProfile() {
    return { ...this.userProfile };
  }
  setUserProfile(newProfile) {
    this.userProfile = newProfile;
    this.router.navigate(["/profile"]);
  }
}
