import { Component, Input } from "@angular/core";
import { Comment } from "../../../models/Comment";

@Component({
  selector: "app-modal-mycomments",
  templateUrl: "./modal-mycomments.component.html",
  styleUrls: ["./modal-mycomments.component.scss"],
})
export class ModalMycommentsComponent {
  @Input() myCommentList!: Comment[];
}
