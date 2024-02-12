import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
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
