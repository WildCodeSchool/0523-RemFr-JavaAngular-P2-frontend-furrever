import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ApiCallService } from "../../../services/api/api-call.service";
import { Species } from "../../../models/Species";
import { Router } from "@angular/router";

@Component({
  selector: "app-animal-form",
  templateUrl: "./animal-form.component.html",
  styleUrls: ["./animal-form.component.scss"],
})
export class AnimalFormComponent implements OnInit {
  speciesList: Species[] = [];
  speciesId = "";
  errors: string[] = [];
  constructor(private apiCallService: ApiCallService, private route: Router) {}

  animalForm = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    weight: new FormControl(""),
    birthday: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
  });

  ngOnInit(): void {
    this.apiCallService.getSpeciesName().subscribe((speciesList: Species[]) => {
      this.speciesList = speciesList;
    });
  }

  getSpeciesId(id: string){
    this.speciesId = id;
  }

  sendAnimalForm() {
    this.errors = [];
    const species = this.speciesList.find((species) => species.id === this.speciesId);
    this.validation(
      this.animalForm.getRawValue().firstname,
      this.animalForm.getRawValue().birthday,
      species,
      this.animalForm.getRawValue().description,
    );

    if (species && this.errors.length <= 0) {
      const payload = {
        firstname: this.animalForm.getRawValue().firstname,
        weight: this.animalForm.getRawValue().weight,
        birthday: this.animalForm.getRawValue().birthday,
        species,
        description: this.animalForm.getRawValue().description,
      };
      this.apiCallService.createAnimal(payload).subscribe();
    this.redirectTo("/profile");
    }
  }
  redirectTo(uri: string) {
    this.route.navigateByUrl("/", { skipLocationChange: true }).then(() => this.route.navigate([uri]));
  }

  validation(
    firstname: string | null,
    birthday: string | null,
    species: Species | undefined,
    description: string | null,

  ) {
    if (!firstname) {
      this.errors.push("Le prénom n'est pas valide.");
    }
    if (!birthday) {
      this.errors.push("L'anniversaire n'est pas valide.");
    }
    if (!species) {
      this.errors.push("Merci de choisir une espèce.");
    }
    if (!description) {
      this.errors.push("Merci de remplir la description.");
    }
  }
}
