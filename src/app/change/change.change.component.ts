import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { ChangeService } from './change.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-chg-chg',
  templateUrl: 'app/change/change.change.component.html'
})
export class ChangeChangeComponent implements OnInit {
    public data = {
        achieving: {},
        balancing: {},
        body: {},
        core_team: {},
        data: {},
        flex_cross: {},
        flex_customer: {},
        flex_integration: {},
        flex_iterative: {},
        flex_time: {},
        overview: {},
        senior: {},
        stakeholder: {}
    };
    
    constructor(
            private changeservice: ChangeService) {}
  
    ngOnInit() {
        this.getQuality();  
   }
   
    getQuality() {
       //console.log("debut getPrin");
       this.changeservice.getChangeChange().subscribe(
            chg => {
                //console.log(chg);
                this.data.achieving=chg.achieving;
                this.data.balancing = chg.balancing;
                this.data.body = chg.body;
                this.data.core_team = chg.core_team;
                this.data.data = chg.data;
                this.data.flex_cross = chg.flex_cross;
                this.data.flex_customer = chg.flex_customer;
                this.data.flex_integration = chg.flex_integration;
                this.data.flex_iterative = chg.flex_iterative;
                this.data.flex_time = chg.flex_time;
                this.data.overview = chg.overview;
                this.data.senior = chg.senior;
                this.data.stakeholder = chg.stakeholder;
            },
            err => {
                console.log(err);
            });
   }
   
  
}
