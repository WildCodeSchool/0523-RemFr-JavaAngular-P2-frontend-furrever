import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgOptimizedImage } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { DemoPipe } from "./pipes/demo.pipe";
import { InitialPipe } from "./pipes/initial.pipe";
import { DemoDirective } from "./directives/demo.directive";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { CommentCardComponent } from "./components/comment-card/comment-card.component";
import { UserInfosComponent } from "./components/user-infos/user-infos.component";
import { ServicesListComponent } from "./components/services-list/services-list.component";
import { ServicesComponent } from "./components/services/services.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { SubHeaderComponent } from "./components/sub-header/sub-header.component";
import { SignupFormComponent } from "./components/forms/signup-form/signup-form.component";
import { LoginFormComponent } from "./components/forms/login-form/login-form.component";
import { PetsitterPreviewComponent } from "./components/petsitter-preview/petsitter-preview.component";
import { SearchFormComponent } from "./components/forms/search-form/search-form.component";
import { UserInfosComponent } from './components/user-infos/user-infos.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { ServicesComponent } from './components/services/services.component';
import { ModalServiceComponent } from './components/modal-service/modal-service.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { SignupFormComponent } from './components/forms/signup-form/signup-form.component';

import { HomeComponent } from "./pages/home/home.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { SearchResultComponent } from "./pages/search-result/search-result.component";
import { LogInComponent } from "./pages/log-in/log-in.component";
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { PetsitterProfileComponent } from './pages/petsitter-profile/petsitter-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoPipe,
    InitialPipe,
    DemoDirective,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CommentCardComponent,
    SearchFormComponent,
    SearchResultComponent,
    PetsitterPreviewComponent,
    LogInComponent,
    LoginFormComponent,
    SignUpComponent,
    SubHeaderComponent,
    SignupFormComponent,
    PetsitterProfileComponent,
    UserInfosComponent,
    ServicesListComponent,
    ServicesComponent,
    LoaderComponent,
    ModalServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
