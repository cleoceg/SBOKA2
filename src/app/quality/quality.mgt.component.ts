import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { QualityService } from './quality.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-qual-mgt',
  templateUrl: 'app/quality/quality.mgt.component.html'
})
export class QualityMgtComponent implements OnInit {
    public data = {
        control: {},
        data: {},
        integration: {},
        overview: {},
        pdca: {},
        plan: {},
        planning: {}
    };
    
    constructor(
            private qualityservice: QualityService) {}
  
    ngOnInit() {
        this.getQuality();  
   }
   
    getQuality() {
       //console.log("debut getPrin");
       this.qualityservice.getQualMgt().subscribe(
            qual => {
                //console.log(qual);
                this.data.control=qual.control;
                this.data.data = qual.data;
                this.data.integration = qual.integration;
                this.data.overview = qual.overview;
                this.data.pdca = qual.pdca;
                this.data.plan = qual.plan;
                this.data.planning = qual.planning;
            },
            err => {
                console.log(err);
            });
   }
   
  
}
