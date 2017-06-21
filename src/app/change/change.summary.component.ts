import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { ChangeService } from './change.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-chg-sum',
  templateUrl: 'app/change/change.summary.component.html'
})
export class ChangeSummaryComponent implements OnInit {
    public data = {
        data: {},
        table: {}
    };
    
    constructor(
            private changeservice: ChangeService) {}
  
    ngOnInit() {
        this.getQuality();  
   }
   
    getQuality() {
       //console.log("debut getPrin");
       this.changeservice.getChangeSummary().subscribe(
            chg => {
                //console.log(chg);
                this.data.data=chg.data;
                this.data.table = chg.table;
            },
            err => {
                console.log(err);
            });
   }
   
  
}
