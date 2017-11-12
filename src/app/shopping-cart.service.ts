import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { SessionService } from './session.service';

@Injectable()
export class ShoppingCartService {

  constructor(private sessionSvc: SessionService) { }

  addToCart(product: Product) {
    let obj = this.sessionSvc.ShoppingCart;
    obj.addToCart(product);
    this.sessionSvc.ShoppingCart = obj;
  }

  removeFormCart(product:Product){
    let obj=this.sessionSvc.ShoppingCart;
    obj.removeFromCart(product);
    this.sessionSvc.ShoppingCart=obj;
  }

  removeAll(){
    let obj=this.sessionSvc.ShoppingCart;
    obj.removeAll();
    this.sessionSvc.ShoppingCart = obj;
  }
}
