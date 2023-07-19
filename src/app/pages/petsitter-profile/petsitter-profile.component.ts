import { Component } from "@angular/core";
import { Comment } from "../../models/Comment";

@Component({
  selector: "app-petsitter-profile",
  templateUrl: "./petsitter-profile.component.html",
  styleUrls: ["./petsitter-profile.component.scss"],
})
export class PetsitterProfileComponent {
  commentList: Comment[] = [];
}
