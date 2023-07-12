import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgOptimizedImage } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";

import { DemoPipe } from "./pipes/demo.pipe";
import { DemoDirective } from "./directives/demo.directive";

import { AppComponent } from "./app.component";
import { DemoComponent } from "./components/demo/demo.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { CommentCardComponent } from "./components/comment-card/comment-card.component";

import { HomeComponent } from "./pages/home/home.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { LoginComponent } from "./pages/login/login.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoPipe,
    DemoDirective,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CommentCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, NgOptimizedImage, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
