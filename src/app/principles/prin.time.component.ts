import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { risk_item } from '../model/risk';
import { PrinService } from './prin.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-prin-time',
  templateUrl: 'app/principles/prin.time.component.html'
})
export class PrinTimeComponent implements OnInit {
    public data = {
        overview: {},
        planning: {},
        retrospect: {} ,
        review: {},
        sprint: {},
        standup: {}
   };
    
    constructor(
            private prinservice: PrinService) {}
  
    ngOnInit() {
        this.getPrin();
        //console.log(this.data);
   }
   
    getPrin() {
       //console.log("debut getPrin");
       this.prinservice.getPrinTime().subscribe(
            prin => {
                //console.log(prin);
                this.data.overview = prin.overview;
                this.data.planning = prin.planning;
                this.data.retrospect = prin.retrospect;
                this.data.review = prin.review;
                this.data.sprint = prin.sprint;
                this.data.standup = prin.standup;
            },
            err => {
                console.log(err);
            });
   }
   
  
}


