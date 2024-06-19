import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Interface/General/navbar/navbar.component';
import { FotherComponent } from './Interface/General/fother/fother.component';
import { LandingComponent } from './Interface/General/landing/landing.component';
import { LoginRentComponent } from './Interface/Components/login-rent/login-rent.component';
import { RegisterRetComponent } from './Interface/Components/register-ret/register-ret.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ArrendadorDashComponent } from './Interface/Components/arrendador-dash/arrendador-dash.component';
import { InquilinoDashComponent } from './Interface/Components/inquilino-dash/inquilino-dash.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FotherComponent,
    LandingComponent,
    LoginRentComponent,
    RegisterRetComponent,
    ArrendadorDashComponent,
    InquilinoDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
