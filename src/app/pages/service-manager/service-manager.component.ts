import { Component, OnInit } from "@angular/core";
import { UserProfile } from "../../models/UserProfile";
import { Species } from "../../models/Species";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiCallService } from "../../services/api/api-call.service";
import { Service } from "../../models/Service";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: "app-service-manager",
  templateUrl: "./service-manager.component.html",
  styleUrls: ["./service-manager.component.scss"],
})
export class ServiceManagerComponent implements OnInit {
  user!: UserProfile;
  speciesList: Species[] = [];
  speciesSelect: string[] = [];
  addService = new FormGroup({
    description: new FormControl(""),
    price: new FormControl(0),
    typeService: new FormControl(""),
    weightMin: new FormControl(0),
    weightMax: new FormControl(0),
    healer: new FormControl(false),
  });

  constructor(
    private authService: AuthService,
    private apiCallService: ApiCallService,
    private route: Router,
    private toast: ToastrService
  ) {}

  ngOnInit() {
    if (!this.authService.isConnectedVerif()) {
      this.route.navigate(["/login"]);
    }
    this.apiCallService.getCurrentUser().subscribe((profile) => {
      this.user = profile.userProfile;
    });
    this.apiCallService.getSpeciesName().subscribe((speciesList: Species[]) => {
      this.speciesList = speciesList;
    });
    this.speciesSelect = [];
    if (this.user == undefined) {
      this.user = new UserProfile("", "", "", "", "", "", 0, 0, 0, false, null);
    }
  }

  checkSpecies(name: string) {
    if (this.speciesSelect.includes(name)) {
      this.speciesSelect.splice(this.speciesSelect.indexOf(name), 1);
    } else {
      this.speciesSelect.push(name);
    }
  }

  onSubmit() {
    console.log(this.user);
    if (this.user.isPetSitter) {
      const description = this.addService.getRawValue().description;
      const price = this.addService.getRawValue().price;
      const typeService = this.addService.getRawValue().typeService;
      const weightMin = this.addService.getRawValue().weightMin;
      const weightMax = this.addService.getRawValue().weightMax;
      const healer = this.addService.getRawValue().healer;
      if (description && price && typeService && healer) {
        const newService = new Service(
          "",
          description,
          price,
          typeService,
          weightMin,
          weightMax,
          this.speciesList,
          healer
        );
        this.apiCallService.createService(newService).subscribe({
          next: () => {
            this.toast.success("Votre service est crée.");
            this.route.navigate(["/profile"]);
          },
          error: () => {
            this.toast.error(
              "Un problème est survenu. Vous n'êtes peut-être pas autorisé à créer un service. Sinon merci de réessayer."
            );
          },
        });
      }
    } else {
      this.toast.error("Vous n'êtes pas autorisé à crée un service.");
    }
  }

  counter(i: number) {
    return new Array(i);
  }
}
