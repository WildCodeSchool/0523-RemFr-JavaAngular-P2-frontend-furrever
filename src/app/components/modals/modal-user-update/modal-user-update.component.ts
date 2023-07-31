import { Component, Input } from "@angular/core";
import { UserProfile } from "../../../models/UserProfile";

@Component({
  selector: "app-modal-user-update",
  templateUrl: "./modal-user-update.component.html",
  styleUrls: ["./modal-user-update.component.scss"],
})
export class ModalUserUpdateComponent {
  @Input() user!: UserProfile;
}
