import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { QualityService } from './quality.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-qual-intro',
  templateUrl: 'app/quality/quality.intro.component.html'
})
export class QualityIntroComponent implements OnInit {
    public gen = {
        id: '',
        title: '',
        comment: ['']
    };
    
    constructor(
            private qualityservice: QualityService) {}
  
    ngOnInit() {
        this.getQuality();  
   }
   
    getQuality() {
       //console.log("debut getPrin");
       this.qualityservice.getQualIntro().subscribe(
            qual => {
                //console.log(qual);
                this.gen.id=qual.id;
                this.gen.title = qual.title;
                this.gen.comment = qual.comment;
            },
            err => {
                console.log(err);
            });
   }
   
  
}

