import { Injectable } from '@angular/core';
import Promise from 'bluebird';
import { UserInfo } from '../models/userinfo';
import { Http, Headers, RequestOptions } from '@angular/http'
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  retrieveProduct(userInfo: UserInfo): Promise<Array<Product>> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('RequestVerificationToken', userInfo.token);

    const options = new RequestOptions({ headers: headers });

    return new Promise((resolve,reject)=>{
      this.http
      .get("https://pwcfrontendtest.azurewebsites.net/getlist", options)
      .subscribe(
       data => {
        let products=new Array<Product>();
        products=data.json().res;
        resolve(products);
      });
    })
  }
}
