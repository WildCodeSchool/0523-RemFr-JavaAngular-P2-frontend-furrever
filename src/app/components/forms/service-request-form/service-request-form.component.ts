import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SendService } from "../../../models/SendService";
import { ApiCallService } from "../../../services/api/api-call.service";
import { ActivatedRoute, Router } from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: "app-service-request-form",
  templateUrl: "./service-request-form.component.html",
  styleUrls: ["./service-request-form.component.scss"],
})
export class ServiceRequestFormComponent {
  @Input() petSitterFirstName!: string;
  @Input() serviceId!: string;

  requestServiceForm = new FormGroup({
    dateStart: new FormControl("", [Validators.required]),
    dateEnd: new FormControl("", [Validators.required]),
    content: new FormControl("", [Validators.required]),
  });
  errors: string[] = [];

  constructor(
    private apiCallService: ApiCallService,
    private activeRoute: ActivatedRoute,
    private route: Router,
    private toastr: ToastrService
  ) {}

  sendRequestService() {
    this.errors = [];
    this.validation(
      this.requestServiceForm.getRawValue().dateStart,
      this.requestServiceForm.getRawValue().dateEnd,
      this.requestServiceForm.getRawValue().content
    );
    if (this.errors.length < 1) {
      const sendService: SendService = {
        service: {
          id: this.serviceId,
        },
        dateStart: this.requestServiceForm.getRawValue().dateStart,
        dateEnd: this.requestServiceForm.getRawValue().dateEnd,
        content: this.requestServiceForm.getRawValue().content,
      };
      this.apiCallService.createTransaction(sendService).subscribe(() => {
        this.toastr.success("Votre demande a été envoyée avec succès!");
        const { id } = this.activeRoute.snapshot.params;
        this.route
          .navigateByUrl("/", { skipLocationChange: true })
          .then(() => this.route.navigate(["profile-petsitter/" + id]));
      });
    }
  }
  validation(dateStart: string | null, dateEnd: string | null, content: string | null) {
    if (!dateStart || !dateStart.trim()) {
      this.errors.push("Une date de début valide doit être entrée.");
    }
    if (!dateEnd || !dateEnd.trim()) {
      this.errors.push("Une date de fin valide doit être entrée.");
    }
    if (this.errors.length === 0 && dateStart && dateEnd) {
      const today = new Date();
      const start = new Date(dateStart);
      const end = new Date(dateEnd);
      const timeDiffForStartToday = start.getTime() - today.getTime();
      const timeDiffForEndToday = end.getTime() - today.getTime();
      if (!timeDiffForStartToday || timeDiffForStartToday < 0 || !timeDiffForEndToday || timeDiffForEndToday < 0) {
        this.errors.push("Merci de sélectionner une date qui n'est pas déjà passée.");
      }
      const timeDiff = end.getTime() - start.getTime();
      if (!timeDiff || timeDiff < 0) {
        if (end.getTime() != start.getTime()) {
          this.errors.push("La date de début doit être avant celle de fin.");
        }
      }
    }
    if (!content || !content.trim() || content.length < 6) {
      this.errors.push("Merci de décrire au mieux votre demande.");
    }
  }
}
