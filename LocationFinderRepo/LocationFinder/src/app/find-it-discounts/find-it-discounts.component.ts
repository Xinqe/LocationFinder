import { Component, OnInit } from '@angular/core';
import { FindItServiceService, Discount_offers} from '../find-it-service.service';
import { forEach } from '@angular/router/src/utils/collection';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-find-it-discounts',
  templateUrl: './find-it-discounts.component.html',
  styleUrls: ['./find-it-discounts.component.css']
})
export class FindItDiscountsComponent implements OnInit {

  constructor(private finditService:FindItServiceService) { }

  ngOnInit() {
this.getDiscounts();
  }

Discounts: any;

public getDiscounts ()
 {
   this.finditService.getDiscounts().subscribe(
     data => {
      console.log(data);
      this.Discounts = data
    },   
     (err: HttpErrorResponse) => {
      if(err.error instanceof Error)
      {
        console.log("clientside error occured");
      }
      console.log("Serverside Error occured");
    }
    )
   
 }

 public deleteDiscount(Discount:Discount_offers): void {
this.finditService.deleteDiscount(Discount.ID);
this.ngOnInit();
 }

}
