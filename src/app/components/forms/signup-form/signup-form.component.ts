import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiCallService } from "../../../services/api/api-call.service";
import { Router } from "@angular/router";
import { PayloadToken } from "../../../models/PayloadToken";
import jwtDecode from "jwt-decode";
import { addUserOnStore } from "../../../services/state/userStore.actions";
import { Store } from "@ngrx/store";
import { AuthService } from "../../../services/auth/auth.service";

@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.scss"],
})
export class SignupFormComponent implements OnInit{
  signup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    firstName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    picture: new FormControl("lionHero.jpg", [Validators.required]),
    isPetSitter: new FormControl(false, [Validators.required]),
  });

  constructor(
    private apiCallService: ApiCallService,
    private route: Router,
    private store: Store<{ userStore: boolean }>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isConnectedVerif()) {
      this.route.navigate(["/profile"]);
    }
  }
  sendSignUp() {
    const email = this.signup.getRawValue().email;
    const password = this.signup.getRawValue().password;
    this.apiCallService.createUser(this.signup.getRawValue()).subscribe((response) => {
      this.apiCallService.loginRequest({ email, password }).subscribe(({ token }) => {
        localStorage.setItem("authToken", token);
        const payloadToken: PayloadToken = jwtDecode(token);
        this.store.dispatch(addUserOnStore({ picture: payloadToken.picture }));
        this.route.navigate(["/profile"]);
      });
    });
  }
}
