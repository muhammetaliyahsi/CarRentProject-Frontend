import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi/navi.component';
import { RentalComponent } from './components/rental/rental/rental.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { ColorComponent } from './components/color/color/color.component';
import { CarComponent } from './components/car/car/car.component';
import { BrandComponent } from './components/brand/brand/brand.component';
import { HttpClientModule } from '@angular/common/http';
import { CarImageComponent } from './components/car-image/car-image.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    RentalComponent,
    CustomerComponent,
    ColorComponent,
    CarComponent,
    BrandComponent,
    CarImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
