import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css']
})
export class PatternsComponent implements OnInit {

  sub: any;
  ID: number = 0;
  username: string = '';

   // Patterns - hidden by default
   isShownKnitting: boolean = false; 
   isShownCrocheting: boolean = false; 

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

     // get userid from Query Params
     this.sub = this.route
     .queryParams
     .subscribe(params => {
       this.ID = params['ID'];
       this.username = params['username'];
     })
  }

  showKnitPatterns() {
    this.isShownKnitting = true; 
    this.isShownCrocheting = false; 
  }

  showCrochetPatterns() {
    this.isShownKnitting = false; 
    this.isShownCrocheting = true; 
  }

  hidePatterns() {
   this.isShownKnitting = false; 
   this.isShownCrocheting = false; 
  }
}
