import { Component, Input, OnInit } from "@angular/core";
import { UserProfile } from "../../models/UserProfile";

@Component({
  selector: "app-petsitter-infos",
  templateUrl: "./petsitter-infos.component.html",
  styleUrls: ["./petsitter-infos.component.scss"],
})
export class PetsitterInfosComponent {
  @Input() petSitterProfile!: UserProfile;

  counter(i: number) {
    return new Array(i);
  }
}
