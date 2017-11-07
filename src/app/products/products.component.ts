import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { ProductService } from '../product.service';
import { ProductList } from '../../models/productlist';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:ProductList;

  constructor(private sessionSVC: SessionService, private productservice: ProductService) { }

  ngOnInit() {
    if (this.sessionSVC.userLoginState = true) {
      this.products=this.productservice.retrieveProduct(this.sessionSVC.loginUserInfo);
    }
  }

}
