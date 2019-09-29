import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../providers/league.service';

// HOME Page Typescript Code for the Hip to be Square Capstone Project.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Array file to hold Leagues (Organizations) List for Home Page.
  leagues: Array<string> = [];
  
  constructor(
    private leagueService: LeagueService,
  ) { }

  ngOnInit() {

    // calling getLeagues() method in LeagueService
    this.leagueService.getLeagues().subscribe(data => {
      this.leagues = data;
    });
  }
}
