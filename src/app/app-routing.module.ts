import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HolidayComponent } from './holiday/holiday.component';
import { FaqComponent } from './faq/faq.component';
import { FlightComponent } from './flight/flight.component';
import { CheckinComponent } from './checkin/checkin.component';
import { ModifyBookingComponent } from './modify-booking/modify-booking.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'holiday',
    component:HolidayComponent
  },
  {
    path:'faq',
    component:FaqComponent
  },
  {
    path:'flight',
    component:FlightComponent
  },
  {
    path:'checkin',
    component:CheckinComponent
  },
  {
    path:'modify-booking',
    component:ModifyBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
