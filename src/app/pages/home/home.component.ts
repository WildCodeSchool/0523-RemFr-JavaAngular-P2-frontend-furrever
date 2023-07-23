import { Component, OnInit } from "@angular/core";
import { ApiCallService } from "../../services/api/api-call.service";
import { Comment } from "../../models/Comment";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  comments: Comment[] = [];
  constructor(private apiCommentService: ApiCallService, private authService: AuthService) {}
  ngOnInit(): void {
    this.apiCommentService.getTopComments().subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
  }
}
