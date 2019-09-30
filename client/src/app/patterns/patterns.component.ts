import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css']
})
export class PatternsComponent implements OnInit {

  @ViewChild('top') top: ElementRef

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

  goToTop(): void {
    //this will provide smooth animation for the scroll
    this.top.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
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
