import { Injectable } from '@angular/core';
import Promise from 'bluebird';
import { UserInfo } from '../models/userinfo';
import { Http, Headers, RequestOptions } from '@angular/http'
import { ProductList } from '../models/productlist';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  retrieveProduct(userInfo: UserInfo): Promise<ProductList> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('RequestVerificationToken', userInfo.token);

    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve,reject)=>{
      this.http
      .get("https://pwcfrontendtest.azurewebsites.net/getlist", options)
      .subscribe(
       data => {
        debugger;
        let products=new ProductList();
        products=data.json().res;
        resolve(products);
      });
    })

  }

}
