import { AlertService } from './../alert.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

import { JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  userType: string;
  fiscalYear: string;

  isLogging = false;
  isError = false;
  errorMessage: string;

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(
    private loginService: LoginService,
    private router: Router,
    private alertService: AlertService
  ) { }


  doLogin() {
    if (this.username && this.password && this.fiscalYear) {
      this.isError = false;
      this.isLogging = true;
      this.loginService.doLogin(this.username, this.password, this.fiscalYear)
        .then((resp: any) => {
          this.isLogging = false;
          if (resp.ok) {
            const decodedToken = this.jwtHelper.decodeToken(resp.token);
            sessionStorage.setItem('token', resp.token);
            sessionStorage.setItem('fullname', decodedToken.fullname);
            this.router.navigate(['users']);
          } else {
            this.alertService.error(JSON.stringify(resp.error));
          }
        })
        .catch(err => {
          this.alertService.serverError();
          this.isLogging = false;
      })
    } else {
      this.alertService.error('กรุณาระบุข้อมูลให้ครบถ้วน');
    }
  }

  enterLogin(event) {
    if (event.charCode === 13) {
      this.doLogin();
    }
  }

  ngOnInit() {
  }

}
