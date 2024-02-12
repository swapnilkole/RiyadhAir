import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-booking',
  templateUrl: './modify-booking.component.html',
  styleUrls: ['./modify-booking.component.css']
})
export class ModifyBookingComponent {
  persona = 3;
  origin= "modify-booking";
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
