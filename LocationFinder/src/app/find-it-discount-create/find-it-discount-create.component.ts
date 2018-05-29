import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FindItServiceService, Discount_offers } from '../find-it-service.service';

@Component({
  selector: 'app-find-it-discount-create',
  templateUrl: './find-it-discount-create.component.html',
  styleUrls: ['./find-it-discount-create.component.css']
})
export class FindItDiscountCreateComponent implements OnInit {

  constructor(private location: Location,
    private finditService:FindItServiceService) { }

  ngOnInit() {
  }


  goBack(): void {
    this.location.back();
  }
  
public createDiscount(name:string, description:string, offertype:string, startdate:string, expirydate:string, terms:string, organisationID:number):void{

  this.finditService.createDiscount({Name:name, Description:description, DiscountOfferType:offertype, Startdate: startdate, Expirydate: expirydate, TermsAndConditions: terms, OrganisationID: organisationID} as Discount_offers);
 this.ngOnInit();
  this.goBack();
 
}

}
