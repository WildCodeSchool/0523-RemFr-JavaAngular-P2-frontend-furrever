import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiCallService } from "../../services/api/api-call.service";
import { PetsitterViewByOwner } from "../../models/PetsitterViewByOwner";
import { Comment } from "../../models/Comment";
import { Service } from "../../models/Service";

@Component({
  selector: "app-petsitter-profile",
  templateUrl: "./petsitter-profile.component.html",
  styleUrls: ["./petsitter-profile.component.scss"],
})
export class PetsitterProfileComponent implements OnInit {
  commentList: Comment[] = [];
  petSitterProfile!: PetsitterViewByOwner;
  serviceList: Service[] = [];
  constructor(private activatedRoute: ActivatedRoute, private apiCallService: ApiCallService) {}

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.params["id"];
    console.log(userId);

    this.apiCallService
      .getPetsittersById(userId)
      .subscribe(({ commentTemplateList, petSitterProfile, serviceTemplateList }) => {
        this.commentList = commentTemplateList;
        this.petSitterProfile = petSitterProfile;
        this.serviceList = serviceTemplateList;
      });
  }
}
