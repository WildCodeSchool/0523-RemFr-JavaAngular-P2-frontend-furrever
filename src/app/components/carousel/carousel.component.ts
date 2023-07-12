import { Component, Input } from "@angular/core";
import { trigger, transition, useAnimation } from "@angular/animations";
import { fadeIn, fadeOut, scaleIn, scaleOut } from "./carousel.animations";
import { Router } from "@angular/router";
import { Comment } from "../../models/Comment";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  animations: [
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, { params: { time: "250ms" } })]),
      transition("* => void", [useAnimation(fadeOut, { params: { time: "250ms" } })]),

      transition("void => *", [useAnimation(scaleIn, { params: { time: "250ms" } })]),
      transition("* => void", [useAnimation(scaleOut, { params: { time: "250ms" } })]),
    ]),
  ],
})
export class CarouselComponent {
  constructor(private router: Router) {}
  @Input() commentList: Comment[] = [];

  currentSlide = 0;

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.commentList.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.commentList.length ? 0 : next;
  }
}
