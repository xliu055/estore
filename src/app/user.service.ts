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
        userInfo.username = username;
        userInfo.token = "4D2A355F-78FE-4259-86A-9A3CDB6E1708";

        if (username === "testuser" && password === "888888")
          resolve(userInfo);
        else
          reject("Username or password is incorrect");
      }, 1000);
    });
  }

}
