import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeagueService } from '../providers/league.service';
import { TeamService } from '../providers/team.service';
import { UserService } from './../providers/user.service';

// Teams (Landing) Page Typescript Code for the Hip to be Square Capstone Project.

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  sub: any;
  ID: number = 0;
  username: string = '';
   // Array file to hold Leagues for Drop Down List.
  leagues: Array<string> = [];

  // Array file to hold Teams for List.
  teams: Array<string> = [];

  // Showing ALL Teams - hidden by default
  isShown: boolean = false; 

  constructor(private leagueService: LeagueService, private teamService: TeamService, private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // get userid from Query Params
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.ID = params['ID'];
        this.username = params['username'];
      })

    if (!this.userService.getAuthStatus()) {
       this.router.navigate(['/']);
     }
  
  // calling getLeagues() method in LeagueService
  this.leagueService.getLeagues().subscribe(data => {
    this.leagues = data;
  });

  // calling getTeams() method in TeamService
  this.teamService.getTeams().subscribe(data => {
    this.teams = data;
  });
  } // end of ngOnInit()

  onSelect(value) {
    console.log(value);
    this.teamService.getTeamsByLeague(value).subscribe(data => {
      //console.log("DATA");
      //console.log(data);
      this.teams = data;
      // console.log("TEAMS");
      // console.log(this.teams);
      this.isShown = true;
    });
  }

  onSelectCraft(value) {
    console.log(value);
    this.teamService.getTeamsByTeamType(value).subscribe(data => {
      this.teams = data;
      this.isShown = true;
    });
  }

  showAllTeams() {
    this.teamService.getTeams().subscribe(data => {
    this.teams = data;
  });
    this.isShown = true;
  }
  
  hideAllTeams() {
    this.isShown = false;
  }

} // end of export 
