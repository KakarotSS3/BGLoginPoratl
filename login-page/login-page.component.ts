import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private router: Router) { }
  showLogin = true
  title = 'BGLoginPortal';
  username = '';
  password = '';
  credentials = {}

  loginHandler(userName: string, passWord: string) {
    this.username = userName;
    this.password = passWord;

    if (this.username === 'admin' && this.password === 'admin') {
      alert('Logged In Successfully!!!!');
      this.router.navigate(['./dashboard']);
    } else {
      alert('Invalid Credentials!!!');
    }
  }

  getUserValues(value: any) {

    console.warn(value);
}

getUserDetails(){

}

  LoginBTn() {


  }
}
