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

  constructor(private apiCallService: ApiCallService, private route: Router) {}

  animalForm = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    birthday: new FormControl("", [Validators.required]),
    species: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
  });

  ngOnInit(): void {
    this.apiCallService.getSpeciesName().subscribe((speciesList: Species[]) => {
      this.speciesList = speciesList;
    });
  }

  sendAnimalForm() {
    const species = this.speciesList.find((species) => species.id === this.animalForm.getRawValue().species);
    if (species) {
      const payload = {
        firstName: this.animalForm.getRawValue().firstName,
        birthday: this.animalForm.getRawValue().birthday,
        species,
        description: this.animalForm.getRawValue().description,
      };
      this.apiCallService.createAnimal(payload).subscribe();
    }
    this.redirectTo("/profile");
  }
  redirectTo(uri: string) {
    this.route.navigateByUrl("/", { skipLocationChange: true }).then(() => this.route.navigate([uri]));
  }
}
