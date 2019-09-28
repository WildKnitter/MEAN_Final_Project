import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeagueService } from '../providers/league.service';
import { UserService } from './../providers/user.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit 
{

  sub: any;
  ID: number = 0;
  username: string = '';
   // Array file to hold Leagues for Home Page.
  leagues: Array<string> = [];

  constructor(private leagueService: LeagueService, private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() 
  {

    // get userid from Query Params
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.ID = params['ID'];
        this.username = params['username'];
      })

    // if (!this.userService.getAuthStatus())
    // {
    //   this.router.navigate(['/']);
    // }
  
  // calling getLeagues() method in LeagueService
  this.leagueService.getLeagues().subscribe(data => {
    this.leagues = data;
  });
  } // end of ngOnInit()
} // end of export 
