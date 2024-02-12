import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';


  persona = 3;
  origin= "login";
 
  constructor(private router: Router,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['persona']){
        if(params['persona'] === 'any'){
          this.origin = params['origin'];
        }
        this.persona = params['persona'];
      }
      console.log("Persona : "+this.persona);
    });
  }

  // login() {
  //   if (this.username ==='prabish' && this.password ==='1234') {
  //     console.log( 'login succsesfull')
  //     this.router.navigate(['/welcome']);
  //   } else {
  //     alert('Invalid username or password');
  //   }
  // }

  login() {
    // const mobileNumberPattern = /^[0-9]{10}$/;
    // if (mobileNumberPattern.test(this.username)) {
    //   console.log('Login successful');
    //   this.router.navigate(['/welcome']);
    // } else {
    //   alert('Invalid mobile number');
    // }
    if (!this.username || !this.password) {
      alert('Please provide both username and password');
      return;
    } else {
      localStorage.setItem('username', this.username);
      console.log('Login successful');
      this.router.navigate(['/welcome']);
    }
  }
  
}
