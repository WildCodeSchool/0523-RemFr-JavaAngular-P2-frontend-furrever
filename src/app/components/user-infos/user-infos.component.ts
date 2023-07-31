import { Component, Input, OnInit } from "@angular/core";
import { UserProfile } from "../../models/UserProfile";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";
import { ApiCallService } from "../../services/api/api-call.service";
import { Service } from "../../models/Service";
import { Comment } from "../../models/Comment";

@Component({
  selector: "app-user-infos",
  templateUrl: "./user-infos.component.html",
  styleUrls: ["./user-infos.component.scss"],
})
export class UserInfosComponent implements OnInit {
  @Input() user!: UserProfile;
  @Input() nbPendingTransactions!: number;
  @Input() petSitterFirstName!: string;
  @Input() serviceList: Service[] = [];
  @Input() myCommentList!: Comment[];
  userInfoView = true;
  showModalMyCommentCondition = false;

  ngOnInit() {
    if (this.user == undefined) {
      this.user = new UserProfile("", "", "", "", "", "", 0, 0, 0, false, null);
    }
  }

  counter(i: number) {
    return new Array(i);
  }

  constructor(private authService: AuthService, private route: Router, private apiCallService: ApiCallService) {}
  showModal = false;
  showModalForUpdateUser() {
    if (!this.authService.isConnectedVerif()) {
      this.route.navigate(["/login"]);
    }
    this.showModal = !this.showModal;
  }

  showModalMyComment() {
    this.showModalMyCommentCondition = !this.showModalMyCommentCondition;
  }
}
