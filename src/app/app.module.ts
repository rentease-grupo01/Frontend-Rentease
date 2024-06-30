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
import { CreateComunityComponent } from './Interface/Components/create-comunity/createcomunity.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { PaymentRemindersComponent } from './Interface/Components/recordatorio-pagos/recordatorio-pagos.component';
import { PaymentHistoryComponent } from './Interface/Components/payment-history/payment-history.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FotherComponent,
    LandingComponent,
    LoginRentComponent,
    RegisterRetComponent,
    ArrendadorDashComponent,
    InquilinoDashComponent,
    CreateComunityComponent,
    PaymentRemindersComponent,
    PaymentHistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
