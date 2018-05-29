import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { FindItServiceService } from '../find-it-service.service';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  name: string,
  id: number,
  group: string,
  groupId: number,
  category: string,
  categoryId: number,
  type: string,
  typeId: number
}


@Component({
  selector: 'app-find-it',
  templateUrl: './find-it.component.html',
  styleUrls: ['./find-it.component.css'],
})
export class FindItComponent implements OnInit {

  constructor(
    private finditService:FindItServiceService

  ) { }

  products: any;

  getProducts(){
  this.finditService.getProducts()
  .subscribe(
    data => {
      console.log(data);
      this.products = data
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

  ngOnInit(): void {

    this.getProducts();

}
}

// get all products without service
  // this.http.get<Product>('http://193.10.202.76/Discounts/api/Products/')
  // .subscribe(
  //   data => {
  //     this.products = data
  //     console.log(data);
  //   },
  //   (err: HttpErrorResponse) => {
  //     if(err.error instanceof Error)
  //     {
  //       console.log("clientside error occured");
  //     }
  //     console.log("Serverside Error occured");
  //   }
  // )
  // }
