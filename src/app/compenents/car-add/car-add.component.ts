import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

// FormBuilder: reactive formun servisi , backend deki fluentvalidation gibi mantığı aynı

// FromControl : 


@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  
 carAddForm:FormGroup
  constructor(private formsBuilder:FormBuilder, private carService:CarService, private toastrService:ToastrService ) {
    
  }
  
  
  ngOnInit(): void {
    this.createCarAddForm();
    this.add();
  }

  add(){
    if(this.carAddForm.valid){
      let carModel= Object.assign({},this.carAddForm.value) 
        this.carService.add(carModel).subscribe(data=>{
          console.log(data)
          this.toastrService.success(data.message,"Başarılı")
        },dataError=>{

        if (dataError.error.Errors.length>0){
         console.log(dataError.error.Errors)
         for (let i = 0; i < dataError.error.Errors.length; i++) {
          this.toastrService.error(dataError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
          
         }
          
        }
          
        })
        

    }else{
      this.toastrService.error("Formunuz Eksik","Dikkat")
    }
    
   
   
  }

  createCarAddForm(){
this.carAddForm=this.formsBuilder.group({
  
  
  
  brandId:["",Validators.required],
  colorId:["",Validators.required],
  modelYear:["",Validators.required],
  dailyPrice:["",Validators.required],
  description:["",Validators.required],



})
  }

}
