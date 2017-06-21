import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { OrganService } from './organ.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-organ-summary',
  templateUrl: 'app/organ/organ.summary.component.html'
})
export class OrganSummaryComponent implements OnInit {
    public data = {
        data: {},
        table: {}
    };
    
    constructor(
            private organservice: OrganService) {}
  
    ngOnInit() {
        this.getOrgan();  
   }
   
    getOrgan() {
       //console.log("debut getPrin");
       this.organservice.getOrganSummary().subscribe(
            org => {
                //console.log(org);
                this.data.data = org.data;
                this.data.table = org.table;
                
            },
            err => {
                console.log(err);
            });
   }
   
  
}

