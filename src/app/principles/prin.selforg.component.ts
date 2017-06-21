import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { risk_item } from '../model/risk';
import { PrinService } from './prin.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-prin-selforg',
  templateUrl: 'app/principles/prin.selforg.component.html'
})
export class PrinSelforgComponent implements OnInit {
    public data = {
        overview: {},
        benefits: {},
        goals: {} 
   };
    
    constructor(
            private prinservice: PrinService) {}
  
    ngOnInit() {
        this.getPrin();
        //console.log(this.data);
   }
   
    getPrin() {
       //console.log("debut getPrin");
       this.prinservice.getPrinSelforg().subscribe(
            prinselforg => {
                //console.log(prinselforg);
                this.data.overview = prinselforg.overview;
                this.data.benefits = prinselforg.benefits;
                this.data.goals = prinselforg.goals;
                
            },
            err => {
                console.log(err);
            });
   }
   
  
}

