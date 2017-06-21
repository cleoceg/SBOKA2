import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { QualityService } from './quality.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-qual-def',
  templateUrl: 'app/quality/quality.defined.component.html'
})
export class QualityDefinedComponent implements OnInit {
    public data = {
        data: {},
        overview: {},
        scope: {},
        value: {}
    };
    
    constructor(
            private qualityservice: QualityService) {}
  
    ngOnInit() {
        this.getQuality();  
   }
   
    getQuality() {
       //console.log("debut getPrin");
       this.qualityservice.getQualDefined().subscribe(
            qual => {
                //console.log(qual);
                this.data.data=qual.data;
                this.data.overview = qual.overview;
                this.data.scope = qual.scope;
                this.data.value = qual.value;
            },
            err => {
                console.log(err);
            });
   }
   
  
}
