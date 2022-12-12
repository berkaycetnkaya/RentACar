import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './compenents/brand/brand.component';
import { CarAddComponent } from './compenents/car-add/car-add.component';
import { CarComponent } from './compenents/car/car.component';
import { ColorComponent } from './compenents/color/color.component';

const routes: Routes = [
  {path:"",pathMatch:"full" ,component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"brands",component:BrandComponent},
  {path:"colors",component:ColorComponent},
  {path:"cars/brands/:id",component:CarComponent},
  {path:"cars/add",component:CarAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
