import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent {
  login = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });
  sendLogin() {
    console.table(this.login.getRawValue());
  }
}
