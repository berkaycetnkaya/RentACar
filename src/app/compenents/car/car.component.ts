import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';



import { Car } from 'src/app/models/carr';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoad = false;
  details:CarDetail[]=[]
  filterText="";

 
  // ctor da verirsen classda erişebilirsin
  // private yaptık cunku Carcomponentı  baska classda olusturup cagıran bır kısı httpcliente de erişebilir ondan private yaptık
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute,private toastrService:ToastrService, private cartService:CartService) {}
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(params=>{
    if(params["id"]){
      this.getCarsByBrand(params["id"])
    }
    else{this.getCars()}
   })
  }

  
  getCars() {
    // this geliyor cunku javascripte class diye bir şey yok, her sey fonksiyon type script class- this dediğinde üsteki fonksiyona denk gelıyor demek
    // gelen veriyi aşağıda benim oluşturdugum response modele gore maple demek <>
    // response gelen yanıt

    this.carService.getCars().subscribe(response=>{
      this.details=response.data
      this.dataLoad=true;
    })
    
  }

  getCarsByBrand(brand:number) {
    

    this.carService.getByBrand(brand).subscribe(response=>{
      this.details=response.data
      this.dataLoad=true;
    })
    
  }

addToCart(cars:CarDetail){

 
 
 
  this.toastrService.success("Seçmiş Olduğunuz Araç Kartınıza  Eklendi",cars.brandName)
  this.cartService.addToCart(cars);
}


}
