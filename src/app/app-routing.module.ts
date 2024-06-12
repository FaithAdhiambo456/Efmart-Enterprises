import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { LoginComponent } from './Authentication/login/login.component';
import { HomeComponent } from './DashBoard Components/home/home.component';
import { AboutComponent } from './DashBoard Components/about/about.component';
import { ServicesComponent } from './DashBoard Components/services/services.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'Signup', component:SignUpComponent},
  {path: 'Login', component:LoginComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Services', component: ServicesComponent},
  {path: 'Logout', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
