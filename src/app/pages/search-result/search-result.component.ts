import { Component } from "@angular/core";
import { PetsitterPreview } from "../../models/PetsitterPreview";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"],
})
export class SearchResultComponent {
  petsitterPreviewList: PetsitterPreview[] = [
    new PetsitterPreview(
      "190fff3b-3664-42ab-b5d9-af54b6278c8f",
      "Sammy",
      "Osinski",
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis",
      "assets/images/lion.jpg",
      25,
      4,
      124
    ),
    new PetsitterPreview(
      "190fff3b-3664-42ab-b5d9-af54b6278c8f",
      "Sammy",
      "Osinski",
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis",
      "assets/images/lion.jpg",
      25,
      4,
      124
    ),
    new PetsitterPreview(
      "190fff3b-3664-42ab-b5d9-af54b6278c8f",
      "Sammy",
      "Osinski",
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis",
      "assets/images/lion.jpg",
      25,
      4,
      124
    ),
    new PetsitterPreview(
      "190fff3b-3664-42ab-b5d9-af54b6278c8f",
      "Sammy",
      "Osinski",
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis",
      "assets/images/lion.jpg",
      25,
      4,
      124
    ),
  ];
}
