import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LeagueService } from '../providers/league.service';
import { Router, ActivatedRoute } from '@angular/router';

// HOME Page Typescript Code for the Hip to be Square Capstone Project.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // For the goToTop function
  @ViewChild('top', {static: false}) top: ElementRef

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

  // This function is for the "Back to top" button.
  goToTop(): void {
    //this will provide smooth animation for the scroll
    this.top.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  // This function routes the user to the Login Page.
  goLogin(): void {
    this.router.navigate(['login']);
  }

  // This function routes the user to the Patterns Page.
  goPatterns(): void {
    this.router.navigate(['patterns'], {queryParams: {ID: this.ID, username: this.username}});
  }

}
