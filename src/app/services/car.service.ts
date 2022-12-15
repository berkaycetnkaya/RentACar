import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { Car } from '../models/carr';

import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:7214/api/';
  apidetail="https://localhost:7214/api/Cars/getallDetail"



  constructor(private httpClient: HttpClient) { }
  getCars():Observable<ListResponseModel<CarDetail>> {

    let newPath=this.apiUrl+"cars/getallDetail"


  return  this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }


  getByBrand(brand:number):Observable<ListResponseModel<CarDetail>> {

    let newPath=this.apiUrl+"Cars/getbyBrand?brand="+brand

    return  this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
    }



    add(car:Car):Observable<ResponseModel>{
      return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)

    }
}
