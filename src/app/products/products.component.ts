import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { ProductService } from '../product.service';
import { Product } from '../../models/product';
import { UserInfo } from '../../models/userinfo';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>;
  currentUser: UserInfo;


  constructor(private sessionSvc: SessionService,
    private productservice: ProductService,
    private shoppingCartSvc: ShoppingCartService) { }

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

  addToCart(product: Product) {
    this.shoppingCartSvc.addToCart(product);
    //alert("Add Successfully, please view or delete in Shopping Cart.")
  }
}
