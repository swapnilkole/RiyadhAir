import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
declare function toggleWebchat(): void;

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent {
  departingDate:any;
  returningDate:any;
  departureAirport: string = '';
  arrivalAirport: string = '';
  showSearchResult: boolean = false;
  userActivity:any;
  userInactive: Subject<any> = new Subject();
  isSearchehClicked = false;

  persona = 1;
  origin= "flight";
  constructor(private activatedRoute: ActivatedRoute){
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.departingDate = this.formatDate(today);
    this.returningDate = this.formatDate(tomorrow);
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

  formatDate(date: Date): string {
    // Format date as 'YYYY-MM-DD' for the input type 'date'
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  searchFlights(): void {
    this.isSearchehClicked = true;
    this.setTimeout();
    this.userInactive.subscribe(() => {
      this.isSearchehClicked = false;
      console.log('user has been inactive for 10s');
      toggleWebchat();
    });
    if (this.departureAirport.toUpperCase() != '' || this.arrivalAirport.toUpperCase() != '') {
      this.showSearchResult = true;
    } else {
      this.showSearchResult = false;
    }
  }
  setTimeout() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 10000);
  }

  @HostListener('window:mousemove') refreshUserState() {
    console.log("mousemove")
    clearTimeout(this.userActivity);
    if(this.isSearchehClicked == true){
      this.setTimeout();
    }
    // this.setTimeout();
  }

}
