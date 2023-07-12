import { Component, OnInit } from "@angular/core";
import { ApiCommentService } from "../../services/api/api-comment.service";
import { Comment } from "../../models/Comment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  comments: Comment[] = [];
  constructor(public apiCommentService: ApiCommentService) {}
  ngOnInit(): void {
    this.apiCommentService.getTopComments().subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
  }
}
