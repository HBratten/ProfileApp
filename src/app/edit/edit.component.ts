import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  userProfile: Object;
  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();
  }
  updateUserProfile(form: any): void {
    let newUser = {
      name: form.value.name,
      contactInfo: form.value.contactInfo,
      bio: form.value.bio
    };
    this.profileService.setUserProfile(newUser);
  }
}
