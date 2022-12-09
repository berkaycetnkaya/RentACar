import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { CarResponseModel } from 'src/app/models/carResponseModel';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{

  cars:Car[]=[];
 
  dataLoad=false;
  apiUrl="https://localhost:7214/api/Cars/getall";

  constructor(private httpClient:HttpClient){
  
  }
  ngOnInit(): void {
    this.getCars();
    
  }

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