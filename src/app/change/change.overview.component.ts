import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { ChangeService } from './change.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-chg-ovw',
  templateUrl: 'app/change/change.overview.component.html'
})
export class ChangeOverviewComponent implements OnInit {
    public data = {
        data: {},
        overview: {},
        unapproved: {}
    };
    
    constructor(
            private changeservice: ChangeService) {}
  
    ngOnInit() {
        this.getQuality();  
   }
   
    getQuality() {
       //console.log("debut getPrin");
       this.changeservice.getChangeOverview().subscribe(
            chg => {
                //console.log(chg);
                this.data.data=chg.data;
                this.data.overview = chg.overview;
                this.data.unapproved = chg.unapproved;
            },
            err => {
                console.log(err);
            });
   }
   
  
}
