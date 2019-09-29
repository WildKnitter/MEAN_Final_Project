import { Component, OnInit } from '@angular/core';
import { UserService } from './../providers/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // Array file to hold data for Non-Admin users list.
  users: Array<string> = [];
  
  constructor( private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // calling getUsers() method in UserService
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });

    if (!this.userService.getAdminStatus())
    {
      this.router.navigate(['/']);
    }
  }
}
