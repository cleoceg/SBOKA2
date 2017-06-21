import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { QualityService } from './quality.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-qual-sum',
  templateUrl: 'app/quality/quality.summary.component.html'
})
export class QualitySummaryComponent implements OnInit {
    public data = {
        data: {},
        table: {}
    };
    
    constructor(
            private qualityservice: QualityService) {}
  
    ngOnInit() {
        this.getQuality();  
   }
   
    getQuality() {
       //console.log("debut getPrin");
       this.qualityservice.getQualSummary().subscribe(
            qual => {
                //console.log(qual);
                this.data.data=qual.data;
                this.data.table = qual.table;
            },
            err => {
                console.log(err);
            });
   }
   
  
}

