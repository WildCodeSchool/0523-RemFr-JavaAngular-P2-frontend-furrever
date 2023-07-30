import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";
import { Animal } from "../../models/Animal";
import { ApiCallService } from "../../services/api/api-call.service";
import { UserProfile } from "../../models/UserProfile";
import { Service } from "../../models/Service";
import { Comment } from "../../models/Comment";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  animalList: Animal[] = [];
  user!: UserProfile;
  nbPendingTransactions!: number;
  serviceList: Service[] = [];
  commentList: Comment[] = [];
  loader = true;
  constructor(
    private authService: AuthService,
    private route: Router,
    private apiCallService: ApiCallService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (!this.authService.isConnectedVerif()) {
      this.route.navigate(["/login"]);
    }
    this.apiCallService.getCurrentUser().subscribe((profile) => {
      this.animalList = profile.animalTemplateList;
      this.user = profile.userProfile;
      if (!profile.userProfile.location?.city && profile.userProfile.isPetSitter) {
        this.toastr.info("Merci de compléter votre profil afin que vos services soient rendu visible.", "Information", {
          timeOut: 10000,
          closeButton: true,
        });
      }
      this.nbPendingTransactions = profile.nbPendingTransactions;
      this.serviceList = profile.serviceTemplateList;
      this.commentList = profile.commentTemplateList;
      if (profile.nbPendingTransactions > 0) {
        this.toastr.warning(
          `Vous aver ${profile.nbPendingTransactions} demande de service en attentent de validation.`
        );
      }
      this.loader = false;
    });
  }
}
