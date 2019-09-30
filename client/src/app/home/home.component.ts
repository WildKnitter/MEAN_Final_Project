import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../providers/league.service';
import { Router, ActivatedRoute } from '@angular/router';

// HOME Page Typescript Code for the Hip to be Square Capstone Project.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sub: any;
  ID: number = 0;
  username: string = '';
  
  // Array file to hold Leagues (Organizations) List for Home Page.
  leagues: Array<string> = [];
  
  constructor(
    private leagueService: LeagueService,
    private route: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit() {

    // get userid from Query Params
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.ID = params['ID'];
        this.username = params['username'];
      })

    // calling getLeagues() method in LeagueService
    this.leagueService.getLeagues().subscribe(data => {
      this.leagues = data;
    });
  }

  goHome(): void {
    this.router.navigate(['/'], {queryParams: {ID: this.ID, username: this.username}});
  }

  goPatterns(): void {
    this.router.navigate(['patterns'], {queryParams: {ID: this.ID, username: this.username}});
  }

}
