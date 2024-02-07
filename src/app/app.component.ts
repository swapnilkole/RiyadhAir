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
    console.log('Login successful');
    if(username != undefined) {
      this.router.navigate(['/welcome']);
    }
  }

}
