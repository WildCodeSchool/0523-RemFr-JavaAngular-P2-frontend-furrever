import { Component, Input, OnInit } from "@angular/core";
import { Comment } from "../../models/Comment";

@Component({
  selector: "app-comment-card",
  templateUrl: "./comment-card.component.html",
  styleUrls: ["./comment-card.component.scss"],
})
export class CommentCardComponent {
  @Input()
  commentCard!: Comment;
  counter(i: number) {
    return new Array(i);
  }
}
