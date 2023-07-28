import { Component, Input } from "@angular/core";
import { Service } from "../../../models/Service";
import { AuthService } from "../../../services/auth/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiCallService } from "../../../services/api/api-call.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-modal-service",
  templateUrl: "./modal-service.component.html",
  styleUrls: ["./modal-service.component.scss"],
})
export class ModalServiceComponent {
  @Input() service!: Service;
  @Input() petSitterFirstName!: string;
  @Input() userInfoView?: boolean;
  isResquest = false;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private apiCallService: ApiCallService,
    private toastr: ToastrService
  ) {
  }

  resquestService(id: string | null) {
    if (!this.authService.isConnectedVerif()) {
      const petsitter = this.activatedRoute.snapshot.params;
      this.route.navigate(["/login"], { queryParams: petsitter });
    }
    this.isResquest = true;
  }

  deleteService(id: string | null) {
    if (id) {
      this.apiCallService.deleteService(id).subscribe({
        next: () => {
          this.toastr.success("Votre service a été supprimé.");
          this.route.navigateByUrl("/", { skipLocationChange: true }).then(() => this.route.navigate(["/profile"]));
        },
        error: (err) => {
          this.toastr.error(err);
          this.route.navigateByUrl("/", { skipLocationChange: true }).then(() => this.route.navigate(["/profile"]));
        },
      });
    }
  }
}
