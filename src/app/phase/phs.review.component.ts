import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
//import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { PhsService } from './phs.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-phs-review',
  templateUrl: 'app/phase/phs.review.component.html'
})
export class PhsReviewComponent implements OnInit {
    public data = {
        processes: [{}],
        step: {}
    };
    
    constructor(
            private phsservice: PhsService) {}
  
    ngOnInit() {
        this.getPhs();  
        //console.log(this.data);
   }
   
    getPhs() {
       //console.log("debut getPrin");
       this.phsservice.getPhsReview().subscribe(
            phs => {
                //console.log(phs);
                this.data.processes = phs.processes;
                this.data.step=phs.step;
            },
            err => {
                console.log(err);
            });
   }
   
  
}
