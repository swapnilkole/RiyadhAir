import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-booking',
  templateUrl: './modify-booking.component.html',
  styleUrls: ['./modify-booking.component.css']
})
export class ModifyBookingComponent {
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
