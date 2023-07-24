import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  transactionList = [
    {
      dateSart: "2023-07-24",
      dateEnd: "2023-07-30",
      serviceType: "garde rapporché",
      userName: "Maude",
      petsitter: "Bruno",
      status: null,
      content: "blab blab bla je suis beau, vraiment très beau",
    },
    {
      dateSart: "2023-07-24",
      dateEnd: "2023-07-30",
      serviceType: "garde rapporché",
      userName: "Maude",
      petsitter: "Bruno",
      status: null,
      content: "blab blab bla je suis beau, vraiment très beau",
    },
    {
      dateSart: "2023-07-24",
      dateEnd: "2023-07-30",
      serviceType: "garde rapporché",
      userName: "Maude",
      petsitter: "Bruno",
      status: true,
      content: "blab blab bla je suis beau, vraiment très beau",
    },{
      dateSart: "2023-07-24",
      dateEnd: "2023-07-30",
      serviceType: "garde rapporché",
      userName: "Maude",
      petsitter: "Bruno",
      status: false,
      content: "blab blab bla je suis beau, vraiment très beau",
    },
  ];
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {
    if (!this.authService.isConnectedVerif()) {
      this.route.navigate(["/login"]);
    }
  }
}
