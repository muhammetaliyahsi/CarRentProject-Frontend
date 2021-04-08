import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

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
import { BrandFilterPipePipe } from './pipes/brand-filter-pipe.pipe';
import { ColorFilterPipePipe } from './pipes/color-filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { CarFilterPipePipe } from './pipes/car-filter-pipe.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CardComponent } from './components/card/card.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    RentalComponent,
    CustomerComponent,
    ColorComponent,
    CarComponent,
    BrandComponent,
    CarImageComponent,
    BrandFilterPipePipe,
    ColorFilterPipePipe,
    CarFilterPipePipe,
    SidebarComponent,
    CarDetailComponent,
    CardComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-left"
    }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
