import { Component, Input, OnInit } from "@angular/core";
import { UserProfile } from "../../models/UserProfile";

@Component({
  selector: "app-user-infos",
  templateUrl: "./user-infos.component.html",
  styleUrls: ["./user-infos.component.scss"],
})
export class UserInfosComponent implements OnInit {
  @Input() user!: UserProfile;

  ngOnInit() {
    if (this.user == undefined) {
      this.user = new UserProfile("", "", "", "", "", "", 0, 0, 0, false, null);
    }
  }

  counter(i: number) {
    return new Array(i);
  }
}
