import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  // For the goToTop function
  @ViewChild('top', {static: false}) top: ElementRef

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

    // get userid and username from Query Params
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

  // This function is for the "Back to top" button.
  goToTop(): void {
    //this will provide smooth animation for the scroll
    this.top.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  // The "Select a Team by Organization" Dropdown
  onSelect(value) {
    this.teamService.getTeamsByLeague(value).subscribe(data => {
      this.teams = data;
      this.isShown = true;
    });
  }

  // The "Select a Team by Craft" Dropdown
  onSelectCraft(value) {
    this.teamService.getTeamsByTeamType(value).subscribe(data => {
      this.teams = data;
      this.isShown = true;
    });
  }

  // The "View ALL Teams" button
  showAllTeams() {
    this.teamService.getTeams().subscribe(data => {
    this.teams = data;
  });
    this.isShown = true;
  }

  // The "Reset List" button
  hideAllTeams() {
    this.isShown = false;
  }

} // end of export 
