import { Injectable } from '@angular/core';
import { UserInfo } from '../models/userinfo';

@Injectable()
export class SessionService {

  constructor() { }

  sessionContext: { [sessionKey: string]: any } = {};

  get userLoginState(): boolean {
    if(!sessionStorage["LoginUserInfo"]) return false;
    return  JSON.parse(sessionStorage["LoginUserInfo"]) != null;
  }

  get loginUserInfo(): UserInfo {
    return JSON.parse(sessionStorage["LoginUserInfo"]) as UserInfo
  }

  set loginUserInfo(value: UserInfo) {
    sessionStorage.setItem("LoginUserInfo", JSON.stringify(value));
  }
}
