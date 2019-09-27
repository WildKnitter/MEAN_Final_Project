import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../providers/league.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Array file to hold Leagues for Home Page.
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
