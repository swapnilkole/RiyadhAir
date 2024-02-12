import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  persona = 3;
  origin= "faq";
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
