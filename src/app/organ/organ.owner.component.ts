import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { OrganService } from './organ.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-organ-owner',
  templateUrl: 'app/organ/organ.owner.component.html'
})
export class OrganOwnerComponent implements OnInit {
    public data = {
        VOC: {},
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
       this.organservice.getOrganowner().subscribe(
            org => {
                //console.log(org);
                this.data.VOC = org.VOC;
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
