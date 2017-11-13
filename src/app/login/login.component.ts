import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserCredentials, UserInfo } from '../../models/userinfo';

import { UserService } from '../user.service';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { ShoppingCartService } from "../shopping-cart.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private elementRef: ElementRef,
    private userSvc: UserService,
    private sessionSvc: SessionService,
    private shoppingCartSvc:ShoppingCartService) { }

  ngOnInit() {
    this.sessionSvc.loginUserInfo = null;
    this.shoppingCartSvc.removeAll();
  }

  doLogin(form: NgForm): void {
    let $loginBtn = $('button[type=\'submit\']', this.elementRef.nativeElement);
    
    if (!form.valid) {
      alert("Please input the User Name and Password.");
      return;
    }
    
    (<any>$loginBtn).button('loading');
    this.userSvc.login(form.value.username, form.value.password)
      .then((userInfo: UserInfo) => {
        (<any>$loginBtn).button('reset');
        this.sessionSvc.loginUserInfo = userInfo;
        this.router.navigate(['products']);
      }).catch((errorMsg: string) => {
        //TODO: show error message popup
        (<any>$loginBtn).button('reset');
        alert(errorMsg);
      });
  }
}
