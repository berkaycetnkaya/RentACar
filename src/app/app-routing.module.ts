import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './compenents/brand/brand.component';
import { CarAddComponent } from './compenents/car-add/car-add.component';
import { CarComponent } from './compenents/car/car.component';
import { ColorComponent } from './compenents/color/color.component';
import { DeleteCarComponent } from './compenents/delete-car/delete-car.component';
import { DenemelerimComponent } from './compenents/denemelerim/denemelerim.component';
import { LoginComponent } from './compenents/login/login.component';
import { RegisterComponent } from './compenents/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full" ,component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"brands",component:BrandComponent},
  {path:"colors",component:ColorComponent},
  {path:"cars/brands/:id",component:CarComponent},
  {path:"cars/add",component:CarAddComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path: "cars/delete",component:DeleteCarComponent},
  {path:"denemelerim",component:DenemelerimComponent}
];
// guardı pathin içinde hangisinde kullanacaksan oraya yazıyorsun canactivate: [loginguard]
// birden fazla guard ekleyebilirsin ondan dolayı array dönüyor
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
