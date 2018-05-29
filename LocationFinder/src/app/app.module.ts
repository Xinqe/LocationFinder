import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import {AgmCoreModule} from '@agm/core';

import { AppComponent } from './app.component';
import { FindItComponent } from './find-it/find-it.component';
import { HomeComponent } from './home/home.component';
import { ExternalWebbserviceComponent } from './external-webbservice/external-webbservice.component';

import { FindItServiceService } from './find-it-service.service';

import { FindItDiscountsComponent } from './find-it-discounts/find-it-discounts.component';
import { FindItDiscountCreateComponent } from './find-it-discount-create/find-it-discount-create.component';
import { FindItDiscountDetailsComponent } from './find-it-discount-details/find-it-discount-details.component';



@NgModule({
  declarations: [
    AppComponent,
    FindItComponent,
    HomeComponent,
    ExternalWebbserviceComponent,
    FindItDiscountsComponent,
    FindItDiscountCreateComponent,
    FindItDiscountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDRd3FUiArHZguAS80geEOb2CM89TbKj_w'
    })
  ],
  providers: [FindItServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
