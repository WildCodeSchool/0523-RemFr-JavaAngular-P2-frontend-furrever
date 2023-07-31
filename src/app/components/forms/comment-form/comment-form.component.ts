import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { User } from "../../../models/UserProfile";
import { addUserOnStore } from "../../../services/state/userStore.actions";
import { Comment } from "../../../models/Comment";
import { Transaction } from "../../../models/Transaction";
import { ApiCallService } from "../../../services/api/api-call.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-comment-form",
  templateUrl: "./comment-form.component.html",
  styleUrls: ["./comment-form.component.scss"],
})
export class CommentFormComponent implements OnInit {
  @Input() transaction!: Transaction;
  errors: string[] = [];
  date!: string;
  ngOnInit() {
    const dateObject = new Date();
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    this.date = formattedDate;
  }

  commentForm = this.fb.group({
    note: [0],
    content: [""],
  });

  constructor(
    private fb: FormBuilder,
    private apiCallService: ApiCallService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  sendCommentForm() {
    this.errors = [];
    this.validation(this.commentForm.getRawValue().content);
    const createdComment: Comment = {
      firstname: this.transaction.petSitterFirstName,
      initialLastName: this.transaction.petSitterLastName.slice(0, 1) + ".",
      date: this.date,
      note: this.commentForm.getRawValue().note!,
      content: this.commentForm.getRawValue().content,
    };

    if (this.errors.length <= 0 && this.transaction) {
      this.apiCallService.createComment(createdComment, this.transaction!.idTransaction).subscribe(() => {
        this.redirectTo("/profile");
        this.toastr.success("Votre commentaire a bien été envoyé.");
      });
    }
  }

  redirectTo(uri: string) {
    this.route.navigateByUrl("/", { skipLocationChange: true }).then(() => this.route.navigate([uri]));
  }

  validation(content: string | null) {
    if (!content) {
      this.errors.push("Votre prénom n'est pas valide.");
    }
  }
}
