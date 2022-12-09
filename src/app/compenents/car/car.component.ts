import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car';
import {HttpClient} from '@angular/common/http'
import { CarResponseModel } from 'src/app/models/carResponseModel';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit
 {
  cars:Car[]=[];
 
  dataLoad=false;
 // ctor da verirsen classda erişebilirsin
 // private yaptık cunku Carcomponentı  baska classda olusturup cagıran bır kısı httpcliente de erişebilir ondan private yaptık
 constructor(private httpClient:HttpClient){
  
 }
  ngOnInit(): void {
    this.getCars();
    
  }
  



 
  apiUrl="https://localhost:7214/api/Cars/getall";
  getCars(){
    // this geliyor cunku javascripte class diye bir şey yok, her sey fonksiyon type script class- this dediğinde üsteki fonksiyona denk gelıyor demek
    // gelen veriyi aşağıda benim oluşturdugum response modele gore maple demek <>
// response gelen yanıt
this.httpClient.get<CarResponseModel>(this.apiUrl).subscribe(response=>{this.cars=response.data
this.dataLoad=true;
console.log(response)
console.log(response.data)
console.log(this.cars)

});
  }

}
