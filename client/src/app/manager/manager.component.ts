import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../providers/user.service';

// Manager (Edit User Profile) Page Typescript Code for the Hip to be Square Capstone Project.

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  // create instance of UserService
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {}

  sub: any;
  ID: number = 0;
  username: string = '';
  email: string = '';
  confirmEmail: string = '';
  error: boolean = false;
  errMsg: string = '';
  
  // Delete Confirmation - hidden by default
  isShown: boolean = false ; 

  ngOnInit() {

    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.ID = params['ID'];
        this.username = params['username'];
      });

      if (!this.userService.getAuthStatus())
      {
        this.router.navigate(['/']);
      }
      
  } // end of ngOnInit()

  // Validation for the Update Info submit.
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

      // Call UserService to edit email
      this.userService.editUser(this.ID,this.email).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Email Update Unsuccessful.';
          this.error = true;
        } else {
          this.router.navigate(['teams'], {queryParams: { ID: this.ID, username: this.username }});
        }
      }); // end of editUser 
    }
  } // end of onSubmit

  // Resets the fields.
  onReset(): void {
    this.email = '';
    this.confirmEmail = '';
    this.error = false;
    this.errMsg = '';
  } // end of onReset
  
  // Hides and shows "Member Delete and Cancel container" div.
  toggleShow(): void {
    this.isShown = ! this.isShown;
  }

  // Delete the user and reset the authorization statuses.
  onDelete(): void {
      // Call UserService to delete User
      this.userService.deleteUser(this.ID).subscribe(data => {
      this.userService.setAuthStatus(false);
      this.userService.setAdminStatus(false);
      this.router.navigate(['/']);
      });
  } // end of onDelete
} // end of export
