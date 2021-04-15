import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  apiUrl = 'https://localhost:44396/api/';

  constructor(private httpClient: HttpClient) { }

  getByUserId(userId : number) : Observable<ListResponseModel<Card>> {
    let newPath = this.apiUrl + "cards/getbyuserid?userId="+userId;
    return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }

  addCard(card : Card):Observable<ResponseModel>{
    let newPath = this.apiUrl + "cards/add";
    return this.httpClient.post<ResponseModel>(newPath,card);
  }
}
