import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Authentication/login/login.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { HomeComponent } from './DashBoard Components/home/home.component';
import { AboutComponent } from './DashBoard Components/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './DashBoard Components/dashboard/dashboard.component';
import { ServicesComponent } from './DashBoard Components/services/services.component';
import { FooterComponent } from './DashBoard Components/footer/footer.component';
import { WeatherDetailsComponent } from './Enterprise components/weather-details/weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    AboutComponent,
    DashboardComponent,
    ServicesComponent,
    FooterComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
