import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DemoComponent } from './components/demo/demo.component';
import { DemoPipe } from './pipes/demo.pipe';
import { DemoDirective } from './directives/demo.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { NgOptimizedImage } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
