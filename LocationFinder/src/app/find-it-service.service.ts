import { Injectable } from '@angular/core';

//import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';





export interface Product {
  name: string,
  id: number,
  group: string,
  groupId: number,
  category: string,
  categoryId: number,
  type: string,
  typeId: number,
  attributeList: any
}

// export interface CreateProduct {
//   name: string,
//   id: number,
//   typeId: number,
//   // attributeList: any
// } // funkar inte pga grupp 7 har varit okonsekventa på sin webbservice, produktklassen är inte matchande mot tabellen i deras databas. 

export interface Discount_offers {
  Description:string,
  DiscountOfferType:string
  Expirydate:string,
  ID:  number,
  Name:string,
  OrganisationID:number,
  Startdate:string,
  TermsAndConditions:string
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FindItServiceService {

  
private productUrl = 'http://193.10.202.76/utveckling/api/Products';
private discountUrl = 'http://193.10.202.76/utveckling/api/Discount_offers/';

 //private productUrl = 'https://finditappapi.azurewebsites.net/Product/GetAllProducts';

  constructor(private http: HttpClient) { }

 public getProducts(): Observable<Product> {
return  this.http.get<Product>(this.productUrl);
}

public getDiscounts():Observable<Discount_offers>
{
  return this.http.get<Discount_offers>(this.discountUrl);
}

public getDiscount(id:number):Observable<Discount_offers> {
  return this.http.get<Discount_offers>(this.discountUrl + id);
}

public createDiscount(Discount: Discount_offers): void
{
  this.http.post<Discount_offers>(this.discountUrl, Discount, httpOptions).subscribe(
    data => {
  
      console.log(data);
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

public deleteDiscount(id:number): void {
this.http.delete(this.discountUrl + id).subscribe(
  data => {
  
    console.log(data);
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

public updateDiscount(Discount: Discount_offers): void {
  console.log(Discount);
  this.http.put(this.discountUrl + Discount.ID, Discount, httpOptions).subscribe(data => console.log(data));
}



  }
