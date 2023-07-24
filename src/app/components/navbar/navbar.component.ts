import { Component, Input } from "@angular/core";
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
