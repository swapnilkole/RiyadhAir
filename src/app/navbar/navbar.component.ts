import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLogin: boolean = false;
  constructor(private router: Router) {
    let username = localStorage.getItem('username');
    console.log('Login successful');
    if (username != undefined) {
      this.isLogin = true;
    }
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

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  togglenavbar(): void {
    console.log('vertical navbar', this);
    const toggleNav: any = document.getElementById('navbar');
    if (toggleNav?.style.display !== 'flex') {
      toggleNav.style.display = 'flex';
      console.log('true', toggleNav.style.display);
    } else {
      toggleNav.style.display = 'none';
      console.log('false===>', toggleNav.style.display);
    } // console.log('wasuup==> ', toggleNav.style.display)
  }
}
