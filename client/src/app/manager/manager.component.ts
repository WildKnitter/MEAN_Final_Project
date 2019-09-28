import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../providers/user.service';

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

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.ID = params['ID'];
      });

    this.userService.getUsers().subscribe(data => {
      this.username = data.username;
      this.email = data.email;
    })
  } // end of ngOnInit()

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
      this.userService.editUser(this.email).subscribe(data => {
        if (data['error']) {
          this.errMsg = 'Email Update Unsuccessful.';
          this.error = true;
        } else {
          this.router.navigate(['teams'], {queryParams: { ID: this.ID }});
        }
      }); // end of editUser 
    }
  } // end of onSubmit

  onReset(): void {
    this.router.navigate(['teams'], {queryParams: { ID: this.ID }})
  } // end of onReset
  

  onDelete(ID: number): void {
      // Call UserService to delete User
      this.userService.deleteUser(this.ID).subscribe(data => {
      this.userService.setAuthStatus(false);
      this.userService.setAdminStatus(false);
      this.router.navigate(['/']);
      });
  } // end of onDelete
} // end of export
