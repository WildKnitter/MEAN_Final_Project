import { Component, OnInit } from '@angular/core';
import { UserService } from './../providers/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private authenticated: boolean = false;
  private administrator: boolean = false;

  constructor(private userService: UserService,) { }

  ngOnInit() {
    this.authenticated = this.userService.getAuthStatus();
    this.administrator = this.userService.getAdminStatus();
  }
}
