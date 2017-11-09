import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { ProductService } from '../product.service';
import { Product } from '../../models/product';
import { UserInfo } from '../../models/userinfo';
import { ShoppingCartProduct } from "../../models/shoppingcart";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>;
  currentUser: UserInfo;


  constructor(private sessionSvc: SessionService, private productservice: ProductService) { }

  ngOnInit() {

    if (this.sessionSvc.userLoginState) {

      this.productservice.retrieveProduct(this.sessionSvc.loginUserInfo)
        .then((products: Array<Product>) => {

          this.products = products;

        }).catch((errorMsg: string) => {
          //TODO: show error message popup
          alert(errorMsg);
        });
    }
  }

  AddtoShoppingCart(product: Product) {

    let shoppingcart=new Array<ShoppingCartProduct>();
    let productadded=new ShoppingCartProduct();

    debugger;

    if (this.sessionSvc.ShoppingCartStatus) {
      let productIndex = this.sessionSvc.ShoppingCart.findIndex(item => item.product.name == product.name);

      if (productIndex==0) {
        debugger;
        this.sessionSvc.ShoppingCart[productIndex].quantity= this.sessionSvc.ShoppingCart[productIndex].quantity + 1;
        // this.sessionSvc.ShoppingCart
      }
      else{
        productadded = {
          'product': product,
          'quantity': 1,
          'price': product.price
        }
  
        shoppingcart.push(productadded);
        this.sessionSvc.ShoppingCart = shoppingcart;
      
      }
    }
    else {
      productadded = {
        'product': product,
        'quantity': 1,
        'price': product.price
      }

      shoppingcart.push(productadded);
      this.sessionSvc.ShoppingCart = shoppingcart;
    }
  }
}
