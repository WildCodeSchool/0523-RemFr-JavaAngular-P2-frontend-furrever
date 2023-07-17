import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.scss"],
})
export class SignupFormComponent {
  today = Date;

  signup = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    picture: new FormControl(""),
  });
  sendSignUp() {
    console.table(this.signup.getRawValue());
  }
}
