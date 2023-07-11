import { Component, Input } from "@angular/core";
import { trigger, transition, useAnimation} from "@angular/animations";
import { fadeIn, fadeOut, scaleIn, scaleOut } from "./carousel.animations";
import { IBook } from "src/app/utils/interface";
import { Router } from "@angular/router";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  animations: [
    trigger("carouselAnimation", [
      transition("void => ", [
        useAnimation(fadeIn, { params: { time: "250ms" } }),
      ]),
      transition(" => void", [
        useAnimation(fadeOut, { params: { time: "250ms" } }),
      ]),
/* scale /
transition("void =>", [
    useAnimation(scaleIn, { params: { time: "250ms" } }),
]),
transition("* => void", [
    useAnimation(scaleOut, { params: { time: "250ms" } }),
]),
]),
],
})

export class CarouselComponent {
//je recup les slides ici

constructor(private router: Router) {}
@Input() slides: IBook[] = [];

currentSlide = 0;

onPreviousClick() {
const previous = this.currentSlide - 1;
this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
}

onNextClick() {
const next = this.currentSlide + 1;
this.currentSlide = next === this.slides.length ? 0 : next;
}

//redirection vers les lectures en cours pour ajout de la progression
buttonTitle = "Ma progression";
redirectToReadingInProgress(id: number) {
this.router.navigate(["/progress", id]);
}
}
