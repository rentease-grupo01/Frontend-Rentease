import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Interface/General/navbar/navbar.component';
import { FotherComponent } from './Interface/General/fother/fother.component';
import { LandingComponent } from './Interface/General/landing/landing.component';
import { LoginRentComponent } from './Interface/Components/login-rent/login-rent.component';
import { RegisterRetComponent } from './Interface/Components/register-ret/register-ret.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FotherComponent,
    LandingComponent,
    LoginRentComponent,
    RegisterRetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
