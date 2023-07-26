import { Component, Input } from "@angular/core";
import { Animal } from "../../models/Animal";

@Component({
  selector: "app-animal-card",
  templateUrl: "./animal-card.component.html",
  styleUrls: ["./animal-card.component.scss"],
})
export class AnimalCardComponent {
  @Input()
  animal!: Animal;
  counter(i: number) {
    return new Array(i);
  }
}
