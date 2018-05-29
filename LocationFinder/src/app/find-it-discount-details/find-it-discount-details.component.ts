import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FindItServiceService, Discount_offers } from '../find-it-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-find-it-discount-details',
  templateUrl: './find-it-discount-details.component.html',
  styleUrls: ['./find-it-discount-details.component.css']
})
export class FindItDiscountDetailsComponent implements OnInit {

  constructor(private location: Location,
    private finditService:FindItServiceService,
    private route: ActivatedRoute) { }

    Discount: Discount_offers;

  ngOnInit() {
    this.getDiscount();
  }

  goBack(): void {
  this.location.back();
  }
po: any;
  public getDiscount(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.finditService.getDiscount(id).subscribe(data => {this.Discount = data, console.log(data)});
    this.po = id; //
  }

  public updateDiscount():void {
    console.log(this.Discount);

    this.finditService.updateDiscount(this.Discount);
    this.goBack();
  }

}
