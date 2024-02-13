import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { englishdata } from './english';
import { arabicdata } from './arabic';

@Component({
  selector: 'app-modify-booking',
  templateUrl: './modify-booking.component.html',
  styleUrls: ['./modify-booking.component.css']
})
export class ModifyBookingComponent {
  persona = 3;
  origin= "modify-booking";
  data = englishdata;
  lang='english';

  // constructor(private activatedRoute: ActivatedRoute){
  //   this.activatedRoute.queryParams.subscribe(params => {
  //     if(params['persona']){
  //       if(params['persona'] === 'any'){
  //         this.origin = params['origin'];
  //       }
  //       if(this.origin === 'arabic'){

  //         this.data = arabicdata;

  //       }
  //       this.persona = params['persona'];
  //     }
  //     console.log("Persona : "+this.persona);
  //   });
  // }

  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['persona']){
        if(params['persona'] === 'any'){
          this.origin = params['origin'];
        }
        if(this.origin === 'arabic'){
          this.lang = 'arabic';
          this.data = arabicdata;
        }
        this.persona = params['persona'];
      }
      console.log("Persona : "+this.persona);
    });
  }
  
}
