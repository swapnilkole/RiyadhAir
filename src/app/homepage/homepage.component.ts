import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  persona = 3;
  origin= "home";
  constructor(private activatedRoute: ActivatedRoute){
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
}
