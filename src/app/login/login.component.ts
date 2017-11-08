import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserCredentials, UserInfo } from '../../models/userinfo';

import { UserService } from '../user.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private userSvc: UserService,
              private sessionSvc: SessionService) { }

  ngOnInit() {
  }

  doLogin(form: NgForm): void {
    this.userSvc.login(form.value.username, form.value.password)
      .then((userInfo: UserInfo) => {
        this.sessionSvc.userLoginState = true;
        this.sessionSvc.loginUserInfo = userInfo;

        this.router.navigate(['products', 'apple']);
      }).catch((errorMsg: string) => {
        //TODO: show error message popup
        alert(errorMsg);
      });
  }
}
