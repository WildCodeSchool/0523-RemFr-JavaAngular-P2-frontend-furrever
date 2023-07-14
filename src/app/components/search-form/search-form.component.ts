import { Component, OnInit } from "@angular/core";
import { ApiSpeciesService } from "../../services/api/api-species.service";
import { Species } from "../../models/Species";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"],
})
export class SearchFormComponent implements OnInit {
  speciesList: Species[] = [];
  today!: Date;

  constructor(private apiSpeciesServices: ApiSpeciesService) {}

  ngOnInit(): void {
    this.apiSpeciesServices.getSpeciesName().subscribe((speciesList: Species[]) => {
      this.speciesList = speciesList;
    });
    this.today = new Date();
  }
}
