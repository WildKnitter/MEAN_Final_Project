import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css']
})
export class PatternsComponent implements OnInit {

  // For the goToTop function
  @ViewChild('top', {static: false}) top: ElementRef

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

  // This function is for the "Back to top" button.
  goToTop(): void {
    //this will provide smooth animation for the scroll
    this.top.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  
  // This function displays the knitting patterns.
  showKnitPatterns() {
    this.isShownKnitting = true; 
    this.isShownCrocheting = false; 
  }

   // This function displays the crocheting patterns.
  showCrochetPatterns() {
    this.isShownKnitting = false; 
    this.isShownCrocheting = true; 
  }

   // This function hides all the patterns.
  hidePatterns() {
   this.isShownKnitting = false; 
   this.isShownCrocheting = false; 
  }
}
