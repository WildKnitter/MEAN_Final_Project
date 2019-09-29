import { Component, OnInit } from '@angular/core';
import { UserService } from './../providers/user.service';
import { Router, ActivatedRoute } from '@angular/router';

// Nav Bar Component Typescript Code for the Hip to be Square Capstone Project.

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  sub: any;
  ID: number = 0;
  username: string = '';

  private authenticated: boolean = false;
  private administrator: boolean = false;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // get user ID from Query Params
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.ID = params['ID'];
        this.username = params['username'];
      })

    this.authenticated = this.userService.getAuthStatus();
    this.administrator = this.userService.getAdminStatus();
  }

  goHome(): void {
    this.router.navigate(['/'], {queryParams: {ID: this.ID, username: this.username}});
  }
  
  goTeams(): void {
    this.router.navigate(['teams'], {queryParams: {ID: this.ID, username: this.username}});
  }
  
  goManager(): void {
    this.router.navigate(['manager'], {queryParams: {ID: this.ID, username: this.username}});
  }
  
  goAdmin(): void {
    this.router.navigate(['admin'], {queryParams: {ID: this.ID, username: this.username}});
  }
  
  goLogin(): void {
    this.router.navigate(['login']);
  }

  goRegister(): void {
    this.router.navigate(['register']);
  }

  goLogout(): void {
    this.userService.setAdminStatus(false);
    this.userService.setAuthStatus(false);
    this.router.navigate(['/']);
  }

  isAuth(): boolean {
    return this.userService.getAuthStatus();
  }  

  isAdmin(): boolean {
    return this.userService.getAdminStatus();
  }  
}
