import { Component, OnInit } from '@angular/core';

import {AuthService } from './../providers/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private isAuthenticated: boolean = false;
  private isAdmin: boolean = false;

  constructor(private authService: AuthService,) { }

  ngOnInit() {
    this.isAuthenticated = this.authService.getAuth();
    this.isAdmin = this.authService.getAdmin();
  }
}
