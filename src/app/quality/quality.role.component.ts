import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { QualityService } from './quality.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-qual-role',
  templateUrl: 'app/quality/quality.role.component.html'
})
export class QualityRoleComponent implements OnInit {
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
       this.qualityservice.getQualRole().subscribe(
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
