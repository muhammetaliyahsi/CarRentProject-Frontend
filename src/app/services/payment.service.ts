import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = 'https://localhost:44396/api/payment/payment';

  constructor(private httpClient: HttpClient) { }

  payment(): Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(this.apiUrl);
  }
}
