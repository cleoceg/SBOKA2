import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { ChangeService } from './change.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-chg-vs',
  templateUrl: 'app/change/change.vs.component.html'
})
export class ChangeVsComponent implements OnInit {
    public data = {
        id: '',
        title: '',
        comment: ['']
    };
    
    constructor(
            private changeservice: ChangeService) {}
  
    ngOnInit() {
        this.getQuality();  
   }
   
    getQuality() {
       //console.log("debut getPrin");
       this.changeservice.getChangeVs().subscribe(
            chg => {
                //console.log(chg);
                this.data.id=chg.id;
                this.data.title = chg.title;
                this.data.comment = chg.comment;
            },
            err => {
                console.log(err);
            });
   }
   
  
}

