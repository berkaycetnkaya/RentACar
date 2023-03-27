import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from '../models/carDetail';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { CarService } from './car.service';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private toastrService:ToastrService) { }


  addToCart(car:CarDetail){
    let vehicle = CartItems.find(c=>c.cars.id===car.id);
    if (vehicle){
      this.toastrService.error("Aracı Zaten Ekli")

    }
    else{
      let cartItem = new CartItem();
      cartItem.cars=car;
      CartItems.push(cartItem);

    }
  }

  list():CartItem[]{
    return CartItems;
  }


removeFromCart(car:CarDetail){
  let vehicle = CartItems.find(c=>c.cars.id===car.id);
  CartItems.splice(CartItems.indexOf(vehicle),1)
}

}
