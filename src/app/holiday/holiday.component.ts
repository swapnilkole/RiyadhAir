import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent {
  persona = 3;
  origin= "holiday";
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
