import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { SearchResultComponent } from "./pages/search-result/search-result.component";
import { LogInComponent } from "./pages/log-in/log-in.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { PetsitterProfileComponent } from "./pages/petsitter-profile/petsitter-profile.component";
import { TransactionsManagementComponent } from "./pages/transactions-management/transactions-management.component";
import { ServiceManagerComponent } from "./pages/service-manager/service-manager.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "profile", component: ProfileComponent },
  { path: "login", component: LogInComponent },
  { path: "search-result", component: SearchResultComponent },
  { path: "signup", component: SignUpComponent },
  { path: "profile-petsitter/:id", component: PetsitterProfileComponent },
  { path: "transactions", component: TransactionsManagementComponent },
  { path: "services", component: ServiceManagerComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
