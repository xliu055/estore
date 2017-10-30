import { Component, OnInit } from '@angular/core';
import { UserCredentials } from '../../models/userinfo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doLogin(form: NgForm): void {
    console.log(form.value);
  }

}
