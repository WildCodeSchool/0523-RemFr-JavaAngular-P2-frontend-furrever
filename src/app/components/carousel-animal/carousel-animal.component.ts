import { Component, Input } from "@angular/core";
import { transition, trigger, useAnimation } from "@angular/animations";
import { fadeIn, fadeOut, scaleIn, scaleOut } from "../carousel/carousel.animations";
import { Router } from "@angular/router";
import { Animal } from "../../models/Animal";

@Component({
  selector: "app-carousel-animal",
  templateUrl: "./carousel-animal.component.html",
  styleUrls: ["./carousel-animal.component.scss"],
  animations: [
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, { params: { time: "250ms" } })]),
      transition("* => void", [useAnimation(fadeOut, { params: { time: "250ms" } })]),

      transition("void => *", [useAnimation(scaleIn, { params: { time: "250ms" } })]),
      transition("* => void", [useAnimation(scaleOut, { params: { time: "250ms" } })]),
    ]),
  ],
})
export class CarouselAnimalComponent {
  constructor(private router: Router) {}
  @Input() animalList: Animal[] = [];

  currentSlide = 0;

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.animalList.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.animalList.length ? 0 : next;
  }
}
