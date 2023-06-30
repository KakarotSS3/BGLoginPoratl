import { Component } from '@angular/core';
import { Router } from '@angular/router';
import UserJson from '../Data.json'
import userData from '../UserData.json';
import { ParentChildService } from '../parent-child.service';
import { UserService } from '../user.service';
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  SSN: string;
  HireDate: string;
  street: string;
  state: string;
  city: string;
  postalCode: string;
  BirthDate: string;
  username: string;
  pass: string;
  Child: Child[];
}

interface Child {
  firstName: string;
  lastName: string;
  SSN: string;
  BirthDate: string;
  relationship: string;
  sex: string;
}


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  errorMessageUserName: string = '';
  errorMessagePassword: string = '';
  users: User[] = userData.Parent;

  constructor(private router: Router,private userService: UserService) { }
  showLogin = true
  title = 'BGLoginPortal';
  username = '';
  password = '';
  welUser = ''
  firstname!: string;

  loginHandler(userName: string, passWord: string) {
    this.username = userName;
    this.password = passWord;
    const foundUser = this.users.find(user => user.username === this.username && user.pass === this.password);

    if (foundUser) {
      // Redirect to another component or perform other actions
      this.userService.foundUser = foundUser;
      this.firstname = foundUser.firstName;
      this.router.navigate(['/dashboard', { firstName: this.firstname }]);
      console.log("firstName: "+this.firstname)
      console.log("User Data: "+this.userService.foundUser.lastName)
    } else {
      this.errorMessageUserName = 'Invalid Username';
      this.errorMessagePassword = 'Invalid Password';
    }

  }

  getUserValues(value: any) {

    console.warn(value);
  }

  checkUser() {
    console.log(this.users);
  }
}
