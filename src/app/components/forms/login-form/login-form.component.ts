import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ApiCallService } from "../../../services/api/api-call.service";
import { ActivatedRoute, Router } from "@angular/router";

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

  errors: string[] = [];

  constructor(private apiCallService: ApiCallService, private route: Router, private activatedRoute: ActivatedRoute) {}

  sendLogin() {
    this.errors = [];
    this.validation(this.login.getRawValue().email, this.login.getRawValue().password);
    if (this.errors.length <= 0) {
      this.apiCallService.loginRequest(this.login.getRawValue()).subscribe(({ token }) => {
        localStorage.setItem("authtoken", token);
        console.log(token);
        this.route.navigate(["/"]);
      });
    }
  }

  validation(email: string | null, password: string | null) {
    if (!email || !email.trim() || !email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {
      this.errors.push("Votre adresse email n'est pas une adresse valide");
    }
    if (!password) {
      this.errors.push("Votre mot de passe n'est pas un mot de passe valide");
    }
  }
}
