import { Component, OnInit } from "@angular/core";
import { PetsitterPreview } from "../../models/PetsitterPreview";
import { ActivatedRoute } from "@angular/router";
import { SearchRequest } from "../../models/SearchRequest";
import { ApiCallService } from "../../services/api/api-call.service";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"],
})
export class SearchResultComponent implements OnInit {
  petsitterPreviewList: PetsitterPreview[] = [];
  constructor(private activatedRoute: ActivatedRoute, private apiCallService: ApiCallService) {}
  ngOnInit(): void {
    const { city, typeService, species } = this.activatedRoute.snapshot.queryParams;
    const searchRequest = new SearchRequest(city, typeService, species);
    this.apiCallService.getPetsitters(searchRequest).subscribe((response) => {
      this.petsitterPreviewList = response;
    });
  }

  /*new PetsitterPreview(
      "190fff3b-3664-42ab-b5d9-af54b6278c8f",
      "Sammy",
      "Osinski",
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis",
      "assets/images/lion.jpg",
      25,
      4,
      124
    ),
  */
}
