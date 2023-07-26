import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiCallService } from "../../services/api/api-call.service";
import { UserProfile } from "../../models/UserProfile";
import { Comment } from "../../models/Comment";
import { Service } from "../../models/Service";
import { Location } from "../../models/Location";

@Component({
  selector: "app-petsitter-profile",
  templateUrl: "./petsitter-profile.component.html",
  styleUrls: ["./petsitter-profile.component.scss"],
})
export class PetsitterProfileComponent implements OnInit {
  commentList: Comment[] = [];
  petSitterProfile!: UserProfile;
  serviceList: Service[] = [];

  constructor(private activatedRoute: ActivatedRoute, private apiCallService: ApiCallService) {}

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.params["id"];
    this.apiCallService
      .getPetsittersById(userId)
      .subscribe(({ commentTemplateList, petSitterProfile, serviceTemplateList }) => {
        this.commentList = commentTemplateList;
        const location = new Location(
          "none",
          petSitterProfile.street,
          null,
          null,
          petSitterProfile.city,
          petSitterProfile.zipCode
        );
        this.petSitterProfile = new UserProfile(
          petSitterProfile.idPetsitter,
          petSitterProfile.email!,
          petSitterProfile.firstname!,
          petSitterProfile.lastname!,
          petSitterProfile.description,
          petSitterProfile.picture,
          0,
          petSitterProfile.rating,
          petSitterProfile.ratingQuantity,
          petSitterProfile.isPetSitter!,
          location
        );
        this.petSitterProfile.ratingQuantity = this.commentList.length;
        let allNotes = 0;
        this.commentList.forEach(({ note }) => (allNotes += note));
        this.petSitterProfile.rating = Math.round(allNotes / this.commentList.length);
        this.serviceList = serviceTemplateList;
        console.log(petSitterProfile);
      });
  }
}
