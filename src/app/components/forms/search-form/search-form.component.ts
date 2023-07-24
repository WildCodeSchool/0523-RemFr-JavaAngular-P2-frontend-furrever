import { Component, OnInit } from "@angular/core";
import { ApiCallService } from "../../../services/api/api-call.service";
import { Species } from "../../../models/Species";
import { FormControl, FormGroup } from "@angular/forms";
import { SearchRequest } from "../../../models/SearchRequest";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.scss"],
})
export class SearchFormComponent implements OnInit {
  speciesList: Species[] = [];
  today!: Date;
  speciesSelect: string[] = [];
  searchForm = new FormGroup({
    service: new FormControl("Promenade quotidienne"),
    city: new FormControl(""),
  });

  constructor(private apiCallService: ApiCallService, private route: Router) {}

  ngOnInit(): void {
    this.apiCallService.getSpeciesName().subscribe((speciesList: Species[]) => {
      this.speciesList = speciesList;
    });
    this.today = new Date();
  }

  checkSpecies(name: string) {
    if (this.speciesSelect.includes(name)) {
      this.speciesSelect.splice(this.speciesSelect.indexOf(name), 1);
    } else {
      this.speciesSelect.push(name);
    }
  }

  onSubmit() {
    const searchRequest = new SearchRequest(
      this.searchForm.getRawValue().city,
      this.searchForm.getRawValue().service,
      this.speciesSelect
    );
    this.route.navigate(["/search-result"], { queryParams: searchRequest });
  }
}
