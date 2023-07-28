import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgOptimizedImage } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { ToastrModule } from "ngx-toastr";

import { DemoPipe } from "./pipes/demo.pipe";
import { InitialPipe } from "./pipes/initial.pipe";
import { DemoDirective } from "./directives/demo.directive";
import { userStoreReducer } from "./services/state/userStore.reducer";
import { AuthInterceptor } from "./services/auth/auth.interceptor";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { CommentCardComponent } from "./components/comment-card/comment-card.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { PetsitterPreviewComponent } from "./components/petsitter-preview/petsitter-preview.component";
import { SearchFormComponent } from "./components/forms/search-form/search-form.component";
import { PetsitterInfosComponent } from "./components/petsitter-infos/petsitter-infos.component";
import { ServicesListComponent } from "./components/services-list/services-list.component";
import { ServicesComponent } from "./components/services/services.component";
import { ModalServiceComponent } from "./components/modals/modal-service/modal-service.component";
import { LoginFormComponent } from "./components/forms/login-form/login-form.component";
import { SubHeaderComponent } from "./components/sub-header/sub-header.component";
import { SignupFormComponent } from "./components/forms/signup-form/signup-form.component";
import { ServiceRequestFormComponent } from "./components/forms/service-request-form/service-request-form.component";
import { TransactionDetailsComponent } from "./components/modals/transaction-details/transaction-details.component";
import { StatusComponent } from "./components/status/status.component";
import { TransactionArrayComponent } from "./components/transaction-array/transaction-array.component";
import { UserInfosComponent } from "./components/user-infos/user-infos.component";
import { AnimalCardComponent } from "./components/animal-card/animal-card.component";
import { CarouselAnimalComponent } from "./components/carousel-animal/carousel-animal.component";
import { AnimalFormComponent } from "./components/forms/animal-form/animal-form.component";
import { ModalAnimalComponent } from "./components/modals/modal-animal/modal-animal.component";
import { UpdateProfileFormComponent } from "./components/forms/update-profile-form/update-profile-form.component";
import { ModalUserUpdateComponent } from "./components/modals/modal-user-update/modal-user-update.component";

import { HomeComponent } from "./pages/home/home.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { SearchResultComponent } from "./pages/search-result/search-result.component";
import { LogInComponent } from "./pages/log-in/log-in.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { PetsitterProfileComponent } from "./pages/petsitter-profile/petsitter-profile.component";
import { TransactionsManagementComponent } from "./pages/transactions-management/transactions-management.component";
import { ServiceManagerComponent } from "./pages/service-manager/service-manager.component";
import { CommentFormComponent } from './components/forms/comment-form/comment-form.component';

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
    PetsitterInfosComponent,
    ServicesListComponent,
    ServicesComponent,
    LoaderComponent,
    ModalServiceComponent,
    ServiceRequestFormComponent,
    TransactionsManagementComponent,
    TransactionDetailsComponent,
    StatusComponent,
    TransactionArrayComponent,
    UserInfosComponent,
    AnimalCardComponent,
    CarouselAnimalComponent,
    AnimalFormComponent,
    ModalAnimalComponent,
    UpdateProfileFormComponent,
    ServiceManagerComponent,
    ModalUserUpdateComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ userStore: userStoreReducer }),
    ToastrModule.forRoot({ positionClass: "toast-top-center" }),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
