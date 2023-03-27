import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './compenents/car/car.component';
import { BrandComponent } from './compenents/brand/brand.component';
import { ColorComponent } from './compenents/color/color.component';
import { NaviComponent } from './compenents/navi/navi.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './compenents/cart-summary/cart-summary.component';
import { ColorfilterPipe } from './pipes/colorfilter.pipe';
import { CarAddComponent } from './compenents/car-add/car-add.component';
import { LoginComponent } from './compenents/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './compenents/register/register.component';
import { DeleteCarComponent } from './compenents/delete-car/delete-car.component';
import { DenemelerimComponent } from './compenents/denemelerim/denemelerim.component';




@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ColorfilterPipe,
    CarAddComponent,
    LoginComponent,
    RegisterComponent,
    DeleteCarComponent,
    DenemelerimComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
