import { Component, OnInit } from '@angular/core';
import { UserService } from './../providers/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private authenticated: boolean = false;
  private administrator: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.authenticated = this.userService.getAuthStatus();
    this.administrator = this.userService.getAdminStatus();
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
  
  goTeams(): void {
    this.router.navigate(['teams']);
  }
  
  goManager(): void {
    this.router.navigate(['manager']);
  }
  
  goAdmin(): void {
    this.router.navigate(['admin']);
  }
  
  goLogin(): void {
    this.router.navigate(['login']);
  }

  goLogout(): void {
    this.router.navigate(['/']);
  }
}
