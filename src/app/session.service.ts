import { Injectable } from '@angular/core';
import { UserInfo } from '../models/userinfo';

@Injectable()
export class SessionService {

  constructor() { }

  sessionContext: { [sessionKey: string]: any }

  get userLoginState(): boolean {
    return this.sessionContext["UserLoginState"] as boolean;
  }

  set userLoginState(value: boolean) {
    this.sessionContext["UserLoginState"] = value;
  }


  get loginUserInfo(): UserInfo {
    return this.sessionContext["LoginUserInfo"] as UserInfo;
  }

  set loginUserInfo(value: UserInfo) {
    this.sessionContext["LoginUserInfo"] = value;
  }
}
