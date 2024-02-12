import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent {
  persona = 3;
  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['persona']){
        this.persona = params['persona'];
      }
      console.log("Persona : "+this.persona);
    });
  }
}
