import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiCallService } from "../../../services/api/api-call.service";

@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.scss"],
})
export class SignupFormComponent {
  today = Date;

  signup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    firstName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    picture: new FormControl("lion.jpg", [Validators.required]),
    isPetSitter: new FormControl(false, [Validators.required]),
  });

  constructor(private apiCallService: ApiCallService) {
  }

  sendSignUp() {
    this.apiCallService.createUser(this.signup.getRawValue()).subscribe((response) => console.log("Vous êtes bien inscrit."));
  }
}
