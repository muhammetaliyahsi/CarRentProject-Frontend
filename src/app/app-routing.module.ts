import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandEditComponent } from './components/brand-edit/brand-edit.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { CarComponent } from './components/car/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorEditComponent } from './components/color-edit/color-edit.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental/rental.component';

const routes: Routes = [
  {path : "",pathMatch : "full", component : CarComponent},
  {path : "cars", component : CarComponent},
  {path : "cars/brand/:brandId/color/:colorId",component:CarComponent},
  {path : "cars/color/:colorId", component : CarComponent},
  {path : "cars/brand/:brandId", component : CarComponent},
  {path : "cars/details/:carId", component : CarDetailComponent},
  {path : "rentals/:carId", component : RentalComponent},
  {path : "payment/:carId", component : PaymentComponent},
  {path : "colors/add", component:ColorAddComponent},
  {path : "brands/add", component:BrandAddComponent},
  {path : "cars/add", component:CarAddComponent},
  {path : "brands/edit", component:BrandEditComponent},
  {path : "colors/edit", component:ColorEditComponent},
  {path : "cars/edit", component:CarEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
