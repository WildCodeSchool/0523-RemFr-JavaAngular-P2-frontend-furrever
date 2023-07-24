import { Component, Input } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { UserStore } from "../../models/UserStore";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  @Input() userStore!: Observable<UserStore>;
}
