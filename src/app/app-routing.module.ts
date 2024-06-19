import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Interface/General/landing/landing.component';
import { LoginRentComponent } from './Interface/Components/login-rent/login-rent.component';
import { RegisterRetComponent } from './Interface/Components/register-ret/register-ret.component';
import { InquilinoDashComponent } from './Interface/Components/inquilino-dash/inquilino-dash.component';
import { InquilinoGuard } from './Servicios/tipo-usuario/inquilino.guard';
import { ArrendadorDashComponent } from './Interface/Components/arrendador-dash/arrendador-dash.component';
import { ArrendadorGuard } from './Servicios/tipo-usuario/arrendador.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: LandingComponent },
  { path: 'log-rent', component: LoginRentComponent},
  { path: 'register-ret', component: RegisterRetComponent},
  {
    path: 'inquilino-dash', component: InquilinoDashComponent, canActivate: [InquilinoGuard],
    children: [

    ]
  },
  {
    path: 'arrendador-dash', component: ArrendadorDashComponent, canActivate: [ArrendadorGuard],
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
