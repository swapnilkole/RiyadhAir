import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HolidayComponent } from './holiday/holiday.component';
import { FaqComponent } from './faq/faq.component';
import { FlightComponent } from './flight/flight.component';
import { CheckinComponent } from './checkin/checkin.component';
import { ModifyBookingComponent } from './modify-booking/modify-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomepageComponent,
    LoginComponent,
    NavbarComponent,
    WelcomeComponent,
    HolidayComponent,
    FaqComponent,
    FlightComponent,
    CheckinComponent,
    ModifyBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
