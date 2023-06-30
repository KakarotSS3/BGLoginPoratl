import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  email: string | undefined;
  token: string | undefined;
  currentPassword: string | undefined;
  newPassword: string | undefined;
  confirmPassword: string | undefined;
  securityQuestion: string | undefined;
  securityAnswer: string | undefined;

  constructor(private router: Router) { }

  changePassword() {
    if (this.newPassword !== this.confirmPassword) {
      // Display error message or perform error handling
      console.log('Passwords do not match!');
      return;
    }

    // Perform password change logic
    console.log('Password changed successfully!');
    this.router.navigate(['/loginPage']);
  }

  ChngePass() {
    this.router.navigate(['/loginPage']);
  }

  ngOnInit() {
    const url = this.router.url;
    const queryParams = url.split('?')[1]; // Get the part after '?'
    const params = queryParams.split('&'); // Split parameters by '&'

    let email: string | undefined;
    let token: string | undefined;

    // Iterate through the parameters to find email and token
    for (const param of params) {
      const [key, value] = param.split('=');

      if (key === 'email') {
        email = value;
      } else if (key === 'token') {
        token = value;
      }
    }

    // Assign the extracted values to component properties
    this.email = email;
    this.token = token;

    // Or call a method to handle the forgot password functionality
    this.handleForgotPassword(email, token);
  }

  handleForgotPassword(email: string | undefined, token: string | undefined) {
    // Implement your logic for the forgot password functionality
    // This method will be called with the extracted email and token
  }
}
