import { Component, Input, OnInit } from "@angular/core";
import { PetsitterViewByOwner } from "../../models/PetsitterViewByOwner";

@Component({
  selector: "app-user-infos",
  templateUrl: "./petsitter-infos.component.html",
  styleUrls: ["./petsitter-infos.component.scss"],
})
export class PetsitterInfosComponent implements OnInit {
  @Input() petSitterProfile!: PetsitterViewByOwner;

  ngOnInit() {
    if (this.petSitterProfile == undefined) {
      this.petSitterProfile = new PetsitterViewByOwner("", "", "", "", "", "", 0, 0, 0, "", "", "");
    }
  }

  counter(i: number) {
    return new Array(i);
  }
}
