import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";

export type Transation = {
  id: string;
  dateSart: string;
  dateEnd: string;
  serviceType: string;
  userName: string;
  petsitter: string;
  status: boolean | null;
  content: string;
  statusFlag: string | null;
};

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {
    if (!this.authService.isConnectedVerif()) {
      this.route.navigate(["/login"]);
    }
  }
}
