import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../providers/user.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  // create instance of UserService
  constructor(private userService: UserService, private router: Router) {}

  username: string = '';
  email: string = '';
  confirmEmail: string = '';
  error: boolean = false;
  errMsg: string = '';

  ngOnInit() {
    
  }

  onSubmit(): void {
    if (this.email == '') {
      this.errMsg = 'Email Address is required.';
      this.error = true;
    } else if (this.confirmEmail == '') {
      this.errMsg = 'Please confirm email.';
      this.error = true;
    } else if (this.email != this.confirmEmail) {
      this.errMsg = 'Emails do not match';
      this.error = true;
    } else {
      this.error = false;
      this.errMsg = '';

      // Call UserService to Register
      this.userService.editUser(this.username, this.email).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Email Update Unsuccessful.';
          this.error = true;
        } else {
          this.router.navigate(['teams']);
        }
      });
    }
  }

  onReset(): void {
    this.email = '';
    this.confirmEmail = '';

    this.error = false;
    this.errMsg = '';
  }

  onDelete(ID: number): void {
      // Call UserService to delete User
      this.userService.deleteUser(ID).subscribe(data => {
        //this.router.navigate(['manager']);
        window.location.reload();
      });
  }
}
