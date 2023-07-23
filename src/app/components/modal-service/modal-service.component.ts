import { Component, Input } from "@angular/core";
import { Service } from "../../models/Service";
import { AuthService } from "../../services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-modal-service",
  templateUrl: "./modal-service.component.html",
  styleUrls: ["./modal-service.component.scss"],
})
export class ModalServiceComponent {
  @Input() service!: Service;
  @Input() petSitterFirstName!: string;
  isResquest = false;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private route: Router) {}

  resquestService(id: string) {
    if (!this.authService.isConnectedVerif()) {
      const petsitter = this.activatedRoute.snapshot.params;
      this.route.navigate(["/login"], { queryParams: petsitter });
    }
    this.isResquest = true;
  }
}
