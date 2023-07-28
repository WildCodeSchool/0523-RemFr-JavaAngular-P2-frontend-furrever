import { Component, Input, OnInit } from "@angular/core";
import { UserProfile } from "../../../models/UserProfile";

@Component({
  selector: 'app-modal-user-comments',
  templateUrl: './modal-user-comments.component.html',
  styleUrls: ['./modal-user-comments.component.scss']
})
export class ModalUserCommentsComponent {
  @Input() user!: UserProfile;
  @Input() commentListIfIAmUser!: Comment[];
}
