import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Interface/General/landing/landing.component';
import { LoginRentComponent } from './Interface/Components/login-rent/login-rent.component';
import { RegisterRetComponent } from './Interface/Components/register-ret/register-ret.component';

const routes: Routes = [
  { path: 'home', component: LoginRentComponent },
  { path: 'log-rent', component: LoginRentComponent},
  { path: 'register-ret', component: RegisterRetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
