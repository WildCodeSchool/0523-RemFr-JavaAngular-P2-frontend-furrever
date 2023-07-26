import { Component, Input } from "@angular/core";
import { AuthService } from "../../../services/auth/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Animal } from "../../../models/Animal";

@Component({
  selector: "app-modal-animal",
  templateUrl: "./modal-animal.component.html",
  styleUrls: ["./modal-animal.component.scss"],
})
export class ModalAnimalComponent {
  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private route: Router) {}
  @Input() animalList: Animal[] = [];
  isResquest = false;

  createAnimal() {
    if (!this.authService.isConnectedVerif()) {
      this.route.navigate(["/login"]);
    }
    this.isResquest = true;
  }
}
