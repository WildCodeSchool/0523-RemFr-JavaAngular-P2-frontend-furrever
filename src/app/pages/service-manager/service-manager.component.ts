import { Component, Input, OnInit } from "@angular/core";
import { UserProfile } from "../../models/UserProfile";
import { Species } from "../../models/Species";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiCallService } from "../../services/api/api-call.service";

@Component({
  selector: "app-service-manager",
  templateUrl: "./service-manager.component.html",
  styleUrls: ["./service-manager.component.scss"],
})
export class ServiceManagerComponent implements OnInit {
  @Input() user!: UserProfile;
  speciesList: Species[] = [];
  speciesSelect: string[] = [];
  addService = new FormGroup({
    serviceType: new FormControl(""),
    price: new FormControl(""),
    description: new FormControl(""),
  });

  constructor(private apiCallService: ApiCallService, private route: Router) {}

  ngOnInit() {
    this.apiCallService.getSpeciesName().subscribe((speciesList: Species[]) => {
      this.speciesList = speciesList;
    });
    this.speciesSelect = [];
    if (this.user == undefined) {
      this.user = new UserProfile("", "", "", "", "", "", 0, 0, 0, false, null);
    }
  }

  checkSpecies(name: string) {
    if (this.speciesSelect.includes(name)) {
      this.speciesSelect.splice(this.speciesSelect.indexOf(name), 1);
    } else {
      this.speciesSelect.push(name);
    }
  }

  onSubmit() {}

  counter(i: number) {
    return new Array(i);
  }
}
