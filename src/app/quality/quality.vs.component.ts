import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { QualityService } from './quality.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-quality-vs',
  templateUrl: 'app/quality/quality.vs.component.html'
})
export class QualityVsComponent implements OnInit {
    public data = {
        id: '',
        title: '',
        comment: ['']
    };
    
    constructor(
            private qualityservice: QualityService) {}
  
    ngOnInit() {
        this.getOrgan();  
   }
   
    getOrgan() {
       //console.log("debut getPrin");
       this.qualityservice.getQualVs().subscribe(
            org => {
                //console.log(org);
                this.data.id = org.id;
                this.data.title = org.title;
                this.data.comment = org.comment;
            },
            err => {
                console.log(err);
            });
   }
   
  
}
