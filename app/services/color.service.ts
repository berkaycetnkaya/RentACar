import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {


  apiurl="https://localhost:7214/api/Color/getall"
  constructor(private httpclient:HttpClient) { }



  getColors():Observable<ListResponseModel<Color>> {
    
    return  this.httpclient.get<ListResponseModel<Color>>(this.apiurl)
    }
}
