import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ApiCallService } from "../../../services/api/api-call.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { addUserOnStore, removeUserOnStore } from "../../../services/state/userStore.actions";
import { AuthService } from "../../../services/auth/auth.service";
import jwtDecode from "jwt-decode";
import { PayloadToken } from "../../../models/PayloadToken";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  login = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });
  errors: string[] = [];

  userStore$!: Observable<boolean>;

  constructor(
    private apiCallService: ApiCallService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store<{ userStore: boolean }>,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (this.authService.isConnectedVerif()) {
      this.toastr.warning("Revenez nous vite !");
      this.store.dispatch(removeUserOnStore());
    }
    localStorage.removeItem("authToken");
    this.userStore$ = this.store.select("userStore");
  }

  sendLogin() {
    this.errors = [];
    this.validation(this.login.getRawValue().email, this.login.getRawValue().password);
    if (this.errors.length <= 0) {
      this.apiCallService.loginRequest(this.login.getRawValue()).subscribe(({ token }) => {
        localStorage.setItem("authToken", token);
        const payloadToken: PayloadToken = jwtDecode(token);
        this.store.dispatch(addUserOnStore({ picture: payloadToken.picture }));
        const queryParam = this.activatedRoute.snapshot.queryParams;
        this.toastr.success("Vous êtes connecté !");
        if (queryParam["id"]) {
          this.route.navigate(["profile-petsitter/" + queryParam["id"]]);
        } else {
          this.route.navigate(["/profile"]);
        }
      });
    }
  }

  validation(email: string | null, password: string | null) {
    if (!email || !email.trim() || !email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {
      this.errors.push("Votre adresse mail n'est pas une adresse valide.");
    }
    if (!password) {
      this.errors.push("Votre mot de passe n'est pas un mot de passe valide.");
    }
  }
}
