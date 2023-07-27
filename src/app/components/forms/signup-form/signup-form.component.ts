import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiCallService } from "../../../services/api/api-call.service";
import { Router } from "@angular/router";
import { PayloadToken } from "../../../models/PayloadToken";
import jwtDecode from "jwt-decode";
import { addUserOnStore } from "../../../services/state/userStore.actions";
import { Store } from "@ngrx/store";
import { AuthService } from "../../../services/auth/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.scss"],
})
export class SignupFormComponent implements OnInit {
  signup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    firstname: new FormControl("", [Validators.required, Validators.minLength(2)]),
    lastname: new FormControl("", [Validators.required, Validators.minLength(2)]),
    picture: new FormControl("lion.jpg", [Validators.required]),
    isPetSitter: new FormControl(false, [Validators.required]),
    location: new FormControl(null),
    description: new FormControl(null),
  });

  errorRegistration?: string;
  constructor(
    private apiCallService: ApiCallService,
    private route: Router,
    private store: Store<{ userStore: boolean }>,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (this.authService.isConnectedVerif()) {
      this.toastr.error("Vous êtes connecté donc déjà inscrit !");
      this.route.navigate(["/profile"]);
    }
  }
  sendSignUp() {
    const email = this.signup.getRawValue().email;
    const password = this.signup.getRawValue().password;
    console.log(this.signup.getRawValue());
    this.apiCallService.createUser(this.signup.getRawValue()).subscribe({
      next: () => {
        this.apiCallService.loginRequest({ email, password }).subscribe(({ token }) => {
          localStorage.setItem("authToken", token);
          const payloadToken: PayloadToken = jwtDecode(token);
          this.toastr.success("Vous êtes connecté !");
          this.store.dispatch(addUserOnStore({ picture: payloadToken.picture }));
          this.route.navigate(["/profile"]);
        });
      },
      error: () => {
        this.errorRegistration =
          "Une erreur est survenue lors de votre inscription, votre adresse email est sûrement déjà utilisée.";
      },
    });
    this.apiCallService
      .createUser(this.signup.getRawValue())
      .subscribe((response) => console.log("Vous êtes bien inscrit."));
  }
}
