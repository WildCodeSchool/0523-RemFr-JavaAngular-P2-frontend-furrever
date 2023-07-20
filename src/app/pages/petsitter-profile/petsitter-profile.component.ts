import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiCallService } from "../../services/api/api-call.service";
import { Service } from "../../models/Service";

@Component({
  selector: "app-petsitter-profile",
  templateUrl: "./petsitter-profile.component.html",
  styleUrls: ["./petsitter-profile.component.scss"],
})

export class PetsitterProfileComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private apiCallService: ApiCallService) {
  }

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.params["id"];
    console.log(userId);

    this.apiCallService.getPetsittersById(userId)
      .subscribe((response: any) => console.log(response));
  }

  serviceList: Service[] = [
    new Service("blablablablablabla", 25, "Bovin", "garde prolongée", null, null, true),
    new Service("blablablablablabla", 25, "Bovin", "garde prolongée", null, null, true),
    new Service("blablablablablabla", 25, "Bovin", "garde prolongée", null, null, true),
    new Service("blablablablablabla", 25, "Bovin", "garde prolongée", null, null, true),
  ];
}

