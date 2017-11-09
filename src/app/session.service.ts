import { Injectable } from '@angular/core';
import { UserInfo } from '../models/userinfo';
import { ShoppingCartProduct } from "../models/shoppingcart";
import { Product } from "../models/product";

@Injectable()
export class SessionService {

  constructor() { }

  sessionContext: { [sessionKey: string]: any } = {};

  get userLoginState(): boolean {
    if (!sessionStorage["LoginUserInfo"]) return false;
    return JSON.parse(sessionStorage["LoginUserInfo"]) != null;
  }

  get loginUserInfo(): UserInfo {
    return JSON.parse(sessionStorage["LoginUserInfo"]) as UserInfo;
  }

  set loginUserInfo(value: UserInfo) {
    sessionStorage.setItem("LoginUserInfo", JSON.stringify(value));
  }

  get ShoppingCartStatus():boolean{
    if (!sessionStorage["ShoppingCart"]) return false;
    return JSON.parse(sessionStorage["ShoppingCart"]) != null;
  }

  get ShoppingCart(): Array<ShoppingCartProduct>{
    return JSON.parse(sessionStorage["ShoppingCart"]) as Array<ShoppingCartProduct>;
  }

  set ShoppingCart(value: Array<ShoppingCartProduct>) {
      sessionStorage.setItem("ShoppingCart", JSON.stringify(value));
  }
}
