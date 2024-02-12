import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  persona = 3;

constructor(private router:Router,private activatedRoute: ActivatedRoute){
  this.activatedRoute.queryParams.subscribe(params => {
    if(params['persona']){
      this.persona = params['persona'];
    }
    console.log("Persona : "+this.persona);
  });
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
