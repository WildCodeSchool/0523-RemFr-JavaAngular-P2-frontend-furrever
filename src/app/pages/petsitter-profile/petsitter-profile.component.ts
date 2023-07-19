import { Component } from "@angular/core";
import { Service } from "../../models/Service";

@Component({
  selector: "app-petsitter-profile",
  templateUrl: "./petsitter-profile.component.html",
  styleUrls: ["./petsitter-profile.component.scss"],
})
export class PetsitterProfileComponent {
  serviceList: Service[] = [
    new Service("blablablablablabla", 25, "Bovin", "garde prolongée", null, null, true),
    new Service("blablablablablabla", 25, "Bovin", "garde prolongée", null, null, true),
    new Service("blablablablablabla", 25, "Bovin", "garde prolongée", null, null, true),
    new Service("blablablablablabla", 25, "Bovin", "garde prolongée", null, null, true),
  ];
}
