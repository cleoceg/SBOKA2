import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
//import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { PhsService } from './phs.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-phs-phases',
  templateUrl: 'app/phase/phs.phases.component.html'
})
export class PhsPhasesComponent implements OnInit {
    public data = {
        steps: [{}]
    };
    
    constructor(
            private phsservice: PhsService) {}
  
    ngOnInit() {
        this.getPhs();  
   }
   
    getPhs() {
       //console.log("debut getPrin");
       this.phsservice.getPhsPhases().subscribe(
            phs => {
                //console.log(phs);
                this.data.steps = phs.steps;
                //this.gen.id=prinintro.id;
                //this.gen.title = prinintro.title;
                //this.gen.comment = prinintro.comment;
            },
            err => {
                console.log(err);
            });
   }
   
  
}