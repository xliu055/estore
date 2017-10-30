import { Injectable } from '@angular/core';
import Promise from 'bluebird';

import { UserInfo } from '../models/userinfo';

@Injectable()
export class UserService {

  constructor() { }

  login(username: string, password: string): Promise<UserInfo> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let userInfo = new UserInfo();
        userInfo.id = 1001;
        userInfo.username = username;
        userInfo.nickname = "Lucy Liu";

        if (username === "admin" && password === "admin")
          resolve(userInfo);
        else
          reject("Username or password is incorrect");
      }, 1000);
    });
  }

}
