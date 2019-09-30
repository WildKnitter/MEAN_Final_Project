import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../providers/user.service';

// Login Page Typescript Code for the Hip to be Square Capstone Project.

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ID: number 
  username: string = '';
  password: string = '';
  error: boolean = false;
  errMsg: string = '';

// create instance of UserService
constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
  }

  //Validates the Log In Submit.
  onSubmit(): void 
  {
    if (this.username == '') 
    {
      this.errMsg = 'User name is required.';
      this.error = true;
    } else if (this.password == '') {
      this.errMsg = 'Password is required.';
      this.error = true;
    } else {
      this.error = false;
      this.errMsg = '';

      // Call UserService authenticate the user
      this.userService.login(this.username, this.password).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Login unsuccessful. Please check that your username and password are correct.';
          this.error = true;
          this.userService.setAuthStatus(false);
        } else {          
          if (data['is_admin'] == 1) {
            this.userService.setAdminStatus(true);
            this.userService.setAuthStatus(true);
            this.ID = data['ID'];
            this.username = data['username'];
            this.router.navigate(['teams'], {queryParams: {ID: this.ID, username: this.username}});
          }
          if (data['is_admin'] == 0) {
            this.userService.setAdminStatus(false);
            this.userService.setAuthStatus(true);
            this.ID = data['ID'];
            this.username = data['username'];
            this.router.navigate(['teams'], {queryParams: {ID: this.ID, username: this.username}});
          }
        }
      });
    } // end onSubmit()
  }

  // Brings the user to the Registration Page.
  goRegister(): void {
    this.router.navigate(['register']);
  }

  // Resets the Login Page so that the user can try logging in again.
  onReset(): void {
    this.username = '';
    this.password = '';
    this.error = false;
    this.errMsg = '';
  } // end onReset()
}
