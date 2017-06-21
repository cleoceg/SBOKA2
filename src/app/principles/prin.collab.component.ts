import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { risk_item } from '../model/risk';
import { PrinService } from './prin.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-prin-collab',
  templateUrl: 'app/principles/prin.collab.component.html'
})
export class PrinCollabComponent implements OnInit {
    public data = {
        overview: {},
        benefits: {},
        distributed: {} ,
        importance: {},
        colocated: {}
   };
    
    constructor(
            private prinservice: PrinService) {}
  
    ngOnInit() {
        this.getPrin();
        //console.log(this.data);
   }
   
    getPrin() {
       //console.log("debut getPrin");
       this.prinservice.getPrinCollab().subscribe(
            prin => {
                //console.log(prin);
                this.data.overview = prin.overview;
                this.data.benefits = prin.benefits;
                this.data.distributed = prin.distributed;
                this.data.importance = prin.importance;
                this.data.colocated = prin.colocated;
            },
            err => {
                console.log(err);
            });
   }
   
  
}
