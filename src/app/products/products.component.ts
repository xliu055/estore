import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { ProductService } from '../product.service';
import { Product} from '../../models/productlist';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:Array<Product>;

  constructor(private sessionSVC: SessionService, private productservice: ProductService) { }

  ngOnInit() {
    debugger;
    if (this.sessionSVC.userLoginState) {  

      this.productservice.retrieveProduct(this.sessionSVC.loginUserInfo)
      .then((products: Array<Product>) => {

        this.products=products;

      }).catch((errorMsg: string) => {
        //TODO: show error message popup
        alert(errorMsg);
      });
    }
  }
}
