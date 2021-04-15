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
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { RentalComponent } from './components/rental/rental/rental.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path : "",pathMatch : "full", component : CarComponent},
  
  
  
  

  //Auth
  {path : "login", component:LoginComponent},
  {path : "register", component:RegisterComponent},

  //Car
  {path : "cars", component : CarComponent},
  {path : "cars/brand/:brandId/color/:colorId",component:CarComponent},
  {path : "cars/color/:colorId", component : CarComponent},
  {path : "cars/brand/:brandId", component : CarComponent},
  {path : "cars/details/:carId", component : CarDetailComponent},

  //CRUD
  {path : "colors/add", component:ColorAddComponent, canActivate:[LoginGuard]},
  {path : "brands/add", component:BrandAddComponent, canActivate:[LoginGuard]},
  {path : "cars/add", component:CarAddComponent, canActivate:[LoginGuard]},
  {path : "brands/edit", component:BrandEditComponent, canActivate:[LoginGuard]},
  {path : "colors/edit", component:ColorEditComponent, canActivate:[LoginGuard]},
  {path : "cars/edit", component:CarEditComponent, canActivate:[LoginGuard]},

  //PAYMENT
  {path : "payment/:carId", component : PaymentComponent},

  //RENTALS
  {path : "rentals/:carId", component : RentalComponent},

  //PROFILE
  {path: 'profile', component: ProfileComponent,canActivate:[LoginGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
