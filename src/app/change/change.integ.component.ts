import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { ChangeService } from './change.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-chg-integ',
  templateUrl: 'app/change/change.integ.component.html'
})
export class ChangeIntegComponent implements OnInit {
    public data = {
        data: {},
        impact: {},
        managing: {},
        overview: {},
        pbrm: {},
        ppbg: {},
        sprint: {}
    };
    
    constructor(
            private changeservice: ChangeService) {}
  
    ngOnInit() {
        this.getQuality();  
   }
   
    getQuality() {
       //console.log("debut getPrin");
       this.changeservice.getChangeInteg().subscribe(
            chg => {
                //console.log(chg);
                this.data.data=chg.data;
                this.data.impact = chg.impact;
                this.data.managing = chg.managing;
                this.data.overview = chg.overview;
                this.data.pbrm = chg.pbrm;
                this.data.ppbg = chg.ppbg;
                this.data.sprint = chg.sprint;
            },
            err => {
                console.log(err);
            });
   }
   
  
}

