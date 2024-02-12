import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RiyadhAir';
  constructor(private router:Router){
    let username=localStorage.getItem("username");
    if(username != undefined) {
      console.log("User already loggedin");
      // this.router.navigate(['/welcome']);
    }
  }

}
