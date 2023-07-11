import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { DemoPageComponent } from "./pages/demo/demo.component";
import { DemoComponent } from "./components/demo/demo.component";
import { DemoPipe } from "./pipes/demo.pipe";
import { DemoDirective } from "./directives/demo.directive";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { CommentCardComponent } from "./components/comment-card/comment-card.component";

@NgModule({
  declarations: [
    AppComponent,
    DemoPageComponent,
    DemoComponent,
    DemoPipe,
    DemoDirective,
    CarouselComponent,
    CommentCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
