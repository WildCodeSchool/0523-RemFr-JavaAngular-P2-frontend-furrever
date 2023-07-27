import { Component, Directive, Input, OnInit } from "@angular/core";
import { ApiCallService } from "../../../services/api/api-call.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserProfile } from "../../../models/UserProfile";

@Component({
  selector: "app-update-profile-form",
  templateUrl: "./update-profile-form.component.html",
  styleUrls: ["./update-profile-form.component.scss"],
})
export class UpdateProfileFormComponent {
  @Input() user!: UserProfile;

  updateUserForm = new FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.minLength(2)]),
    lastname: new FormControl("", [Validators.required, Validators.minLength(2)]),
    picture: new FormControl("", [Validators.required]),
    isPetSitter: new FormControl(false, [Validators.required]),
  });

  constructor(private apiCallService: ApiCallService) {}

  sendUpdateUserForm() {
    console.log(this.updateUserForm.getRawValue());
    this.apiCallService.updateUser(this.updateUserForm.getRawValue()).subscribe((response) => console.log(response));
  }

  protected readonly Input = Input;
}
