import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";
import { Animal } from "../../models/Animal";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  transactionList = [];
  animalList: Animal[] = [
    { firstname: "Boubou", birthday: new Date("2023-03-06"), species: "Tigre", description: "bruno le poux" },
    { firstname: "Bruno", birthday: new Date("2023-03-06"), species: "Ane", description: "Grand gourmand de foin" },
    { firstname: "Hélène", birthday: new Date("2023-03-06"), species: "Panthère", description: "Fait ses griffes sur vos fauteuils" },
  ];
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {
    if (!this.authService.isConnectedVerif()) {
      this.route.navigate(["/login"]);
    }
  }
}
