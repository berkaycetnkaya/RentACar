import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { Car } from '../models/carr';

import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:7214/api/Cars/getall';
  apidetail="https://localhost:7214/api/Cars/getallDetail"
  


  constructor(private httpClient: HttpClient) { }
  getCars():Observable<ListResponseModel<CarDetail>> {
    
  return  this.httpClient.get<ListResponseModel<CarDetail>>(this.apidetail)
  }

}
