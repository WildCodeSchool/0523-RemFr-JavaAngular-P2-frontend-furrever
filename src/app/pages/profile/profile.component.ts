import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";
import { Animal } from "../../models/Animal";
import { ApiCallService } from "../../services/api/api-call.service";
import { GetProfileUserResponse } from "../../models/GetProfileUserResponse";
import { UserProfile } from "../../models/UserProfile";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  animalList: Animal[] = [];
  user!: UserProfile;
  constructor(private authService: AuthService, private route: Router, private apiCallService: ApiCallService) {}

  ngOnInit(): void {
    if (!this.authService.isConnectedVerif()) {
      this.route.navigate(["/login"]);
    }
    this.apiCallService.getCurrentUser().subscribe((profile: GetProfileUserResponse) => {
      this.animalList = profile.animalTemplateList;
      this.user = profile.userProfile;
    });
  }
}
