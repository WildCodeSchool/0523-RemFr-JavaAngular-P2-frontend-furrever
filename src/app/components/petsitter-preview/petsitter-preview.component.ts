import { Component, Input } from "@angular/core";
import { PetsitterPreview } from "../../models/PetsitterPreview";

@Component({
  selector: "app-petsitter-preview",
  templateUrl: "./petsitter-preview.component.html",
  styleUrls: ["./petsitter-preview.component.scss"],
})
export class PetsitterPreviewComponent {
  @Input() petsitter!: PetsitterPreview;
  counter(i: number) {
    return new Array(i);
  }
}
