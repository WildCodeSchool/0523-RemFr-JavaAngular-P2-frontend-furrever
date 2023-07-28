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
  speciesListShow: Species[] = [];
  speciesList: Species[] = [];
  addService = new FormGroup({
    description: new FormControl(""),
    price: new FormControl(0),
    typeService: new FormControl(""),
    weightMin: new FormControl(null),
    weightMax: new FormControl(null),
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
      this.speciesListShow = speciesList;
    });
    this.speciesList = [];
    if (this.user == undefined) {
      this.user = new UserProfile("", "", "", "", "", "", 0, 0, 0, false, null);
    }
  }

  checkSpecies(species: Species) {
    if (this.speciesList.includes(species)) {
      this.speciesList = this.speciesList.filter((speciesInArray) => {
        species != speciesInArray;
      });
    } else {
      this.speciesList.push(species);
    }
  }

  onSubmit() {
    if (this.user.isPetSitter) {
      const description = this.addService.getRawValue().description;
      const price = this.addService.getRawValue().price;
      const typeService = this.addService.getRawValue().typeService?.toLowerCase();
      const weightMin = this.addService.getRawValue().weightMin;
      const weightMax = this.addService.getRawValue().weightMax;
      const healer = this.addService.getRawValue().healer;
      if (description && price && typeService && healer !== null) {
        const newService = new Service(
          null,
          description,
          price,
          typeService,
          weightMin,
          weightMax,
          this.speciesList,
          healer
        );
        this.apiCallService.createService(newService).subscribe({
          next: (response) => {
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
