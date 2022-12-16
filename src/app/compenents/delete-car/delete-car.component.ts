import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {

  carDeleteForm:FormGroup
  constructor(private formsBuilder:FormBuilder, private carService:CarService, private toastrService:ToastrService ) {

  }

  ngOnInit(): void {

  }

  Delete(){
    if(this.carDeleteForm.valid){
      let carModel= Object.assign({},this.carDeleteForm.value)
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





  createCarDeleteForm(){
   this.carDeleteForm=this.formsBuilder.group({


    Id:["",Validators.required],
    brandId:["",Validators.required],
    colorId:["",Validators.required],
    modelYear:["",Validators.required],
    dailyPrice:["",Validators.required],
    description:["",Validators.required],



  })
      }
}
