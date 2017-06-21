import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { OrganService } from './organ.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-organ-master',
  templateUrl: 'app/organ/organ.master.component.html'
})
export class OrganMasterComponent implements OnInit {
    public data = {
        chief: {},
        data: {},
        overview: {},
        table: {}
    };
    
    constructor(
            private organservice: OrganService) {}
  
    ngOnInit() {
        this.getOrgan();  
   }
   
    getOrgan() {
       //console.log("debut getPrin");
       this.organservice.getOrganMaster().subscribe(
            org => {
                //console.log(org);
                this.data.chief = org.chief;
                this.data.data = org.data;
                this.data.overview = org.overview;
                this.data.table = org.table;
            },
            err => {
                console.log(err);
            });
   }
   
  
}

