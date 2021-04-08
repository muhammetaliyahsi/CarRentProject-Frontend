import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44396/api/';

  constructor(private httpClient:HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId : number) : Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetailsbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId : number) : Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getcardetailsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsBrandAndColor(brandId:number,colorId:number): Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcarfilterbrandidcolorid?brandId=" + brandId+"&colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsById(carId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getbyid?id=' + carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsByCarId(carId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
