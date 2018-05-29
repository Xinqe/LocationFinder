import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { FindItComponent } from './find-it/find-it.component';
import { HomeComponent} from './home/home.component';
import { ExternalWebbserviceComponent } from './external-webbservice/external-webbservice.component';
import { FindItDiscountsComponent } from './find-it-discounts/find-it-discounts.component';
import { FindItDiscountCreateComponent } from './find-it-discount-create/find-it-discount-create.component';
import  { FindItDiscountDetailsComponent  } from './find-it-discount-details/find-it-discount-details.component';

const routes : Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'findit', component: FindItComponent},
  {path: 'external', component: ExternalWebbserviceComponent},
  {path: 'discounts', component: FindItDiscountsComponent},
  {path: 'createDiscount', component:  FindItDiscountCreateComponent},
  {path: 'discount/:id', component: FindItDiscountDetailsComponent},

]

@NgModule({
imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
