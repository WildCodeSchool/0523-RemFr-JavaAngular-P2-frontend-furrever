import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { SearchResultComponent } from "./pages/search-result/search-result.component";
import { LogInComponent } from "./pages/log-in/log-in.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "profile", component: ProfileComponent },
  { path: "login", component: LogInComponent },
  { path: "search-result", component: SearchResultComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
