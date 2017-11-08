import { Injectable } from '@angular/core';
import Promise from 'bluebird';

import { UserInfo } from '../models/userinfo';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  login(username: string, password: string): Promise<UserInfo> {

    return new Promise((resolve, reject) => {
      this.http
        .post("https://pwcfrontendtest.azurewebsites.net/login", { username: username, psd: password })
        .subscribe(
        data => {
          let userInfo = new UserInfo();
          userInfo.status = data.json().status;
          userInfo.token = data.json().token;
          
          if (userInfo.status == "success") {
            resolve(userInfo);
            //sessionStorage.setItem('currentuser',JSON.stringify(userInfo));
          }
          else {
            reject("Username or password is incorrect");
          }
        })

    });
  }
}
