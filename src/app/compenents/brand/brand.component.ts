import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
 brands : Brand[]=[]
 
 
 
 /**
  *
  */
 constructor(private brandservice:BrandService) {
  
  
 }
 
  ngOnInit(): void {
    this.getCars();
    
  }

  getCars() {
    // this geliyor cunku javascripte class diye bir şey yok, her sey fonksiyon type script class- this dediğinde üsteki fonksiyona denk gelıyor demek
    // gelen veriyi aşağıda benim oluşturdugum response modele gore maple demek <>
    // response gelen yanıt

    this.brandservice.getBrands().subscribe(response=>{
      this.brands=response.data
      
    })
    
  }

}
