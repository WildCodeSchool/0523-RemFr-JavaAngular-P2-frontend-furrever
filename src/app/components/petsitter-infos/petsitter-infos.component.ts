import { Component, Input, OnInit } from "@angular/core";
import { UserProfile } from "../../models/UserProfile";

@Component({
  selector: "app-petsitter-infos",
  templateUrl: "./petsitter-infos.component.html",
  styleUrls: ["./petsitter-infos.component.scss"],
})
export class PetsitterInfosComponent implements OnInit {
  @Input() petSitterProfile!: UserProfile;

  ngOnInit() {
    if (this.petSitterProfile == undefined) {
      this.petSitterProfile = new UserProfile("", "", "", "", "", "", 0, 0, 0, false, null);
    }
  }

  counter(i: number) {
    return new Array(i);
  }
}
