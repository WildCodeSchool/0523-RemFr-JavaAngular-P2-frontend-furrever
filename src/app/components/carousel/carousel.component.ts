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
  //je recup les slides ici
  constructor(private router: Router) {}

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  @Input() commentList: Comment[] = [
    {
      name: "bruno",
      date: new Date("03/12/2023"),
      note: 1,
      content: "blab labla jdufhef blabla bla",
    },
    {
      name: "bruno",
      date: new Date("01/13/2023"),
      note: 4,
      content: "blab labla jdufhef blabla bla",
    },
    {
      name: "bruno",
      date: new Date("08/05/2022"),
      note: 5,
      content: "blab labla jdufhef blabla bla",
    },
  ];

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
