import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiCallService} from "../../../services/api/api-call.service";
import {Router} from "@angular/router";

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

  constructor(private apiCallService: ApiCallService, private route: Router) {
  }

  sendLogin() {
    this.apiCallService.loginRequest(this.login.getRawValue()).subscribe((token) => {
      localStorage.setItem("authtoken", token);
    });
  }
}
