import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

constructor(private router:Router){
  
}
navigateToLogin() {
  this.router.navigate(['/login']);
}

navigateToHoliday() {
  this.router.navigate(['/holiday']);
}

navigateToFAQ() {
  this.router.navigate(['/faq']);
}

navigateToCheckin() {
  this.router.navigate(['/checkin']);
  }
  navigateToFlight() {
  this.router.navigate(['/flight']);
  }
  navigateToModifyBooking() {
  this.router.navigate(['/modify-booking']);
  }
  logout(){
    localStorage.removeItem('username'); 
  this.router.navigate(['/login'])
  }
}
