import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { QualityService } from './quality.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-qual-accept',
  templateUrl: 'app/quality/quality.accept.component.html'
})
export class QualityAcceptComponent implements OnInit {
    public data = {
        acceptance: {},
        cascading: {},
        data: {},
        done: {},
        example: {},
        minimum: {},
        overview: {},
        writing: {}
    };
    
    constructor(
            private qualityservice: QualityService) {}
  
    ngOnInit() {
        this.getQuality();  
   }
   
    getQuality() {
       //console.log("debut getPrin");
       this.qualityservice.getQualAccept().subscribe(
            qual => {
                //console.log(qual);
                this.data.acceptance=qual.acceptance;
                this.data.cascading = qual.cascading;
                this.data.data = qual.data;
                this.data.done = qual.done;
                this.data.example = qual.example;
                this.data.minimum = qual.minimum;
                this.data.overview = qual.overview;
                this.data.writing = qual.writing;
            },
            err => {
                console.log(err);
            });
   }
   
  
}