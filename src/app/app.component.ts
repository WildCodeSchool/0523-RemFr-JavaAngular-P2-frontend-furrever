import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AuthService } from "./services/auth.service";
import { PayloadToken } from "./models/PayloadToken";
import jwtDecode from "jwt-decode";
import { addUserOnStore } from "./services/state/userStore.actions";
import {UserState, UserStore} from "./models/UserStore";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  userStore$!: Observable<UserStore>;
  constructor(private store: Store<UserState>, private authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.isConnectedVerif()) {
      const token = localStorage.getItem("authToken");
      if (token) {
        const payloadToken: PayloadToken = jwtDecode(token);
        this.store.dispatch(addUserOnStore({ picture: payloadToken.sub }));
      }
    }
    this.userStore$ = this.store.select((state: UserState) => state.userStore);
  }
}
