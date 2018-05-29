import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external-webbservice',
  templateUrl: './external-webbservice.component.html',
  styleUrls: ['./external-webbservice.component.css']
})
export class ExternalWebbserviceComponent implements OnInit {

  latitude: number = 35.6480191;
  longitude: number = 139.7456084;
  locationMarked = true;

  public searchAdress = "";

  constructor() { }

  ngOnInit() {
  }

  onChosenLocation(event) {
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationMarked = true;
  }

  search():void {
    if(this.searchAdress != null)
    {
      
    }
  }

}
