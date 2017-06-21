import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { OrganService } from './organ.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-organ-project',
  templateUrl: 'app/organ/organ.project.component.html'
})
export class OrganProjectComponent implements OnInit {
    public data = {
        SGB: {},
        core: {},
        data: {},
        noncore: {},
        overview: {},
        owner: {},
        sm: {},
        st: {},
        stakeholder: {},
        vendors: {}
    };
    
    constructor(
            private organservice: OrganService) {}
  
    ngOnInit() {
        this.getOrgan();  
   }
   
    getOrgan() {
       //console.log("debut getPrin");
       this.organservice.getOrganproject().subscribe(
            org => {
                //console.log(org);
                this.data.SGB = org.SGB;
                this.data.core = org.core;
                this.data.data = org.data;
                this.data.noncore = org.noncore;
                this.data.overview = org.overview;
                this.data.owner = org.owner;
                this.data.sm = org.sm;
                this.data.st = org.st;
                this.data.stakeholder = org.stakeholder;
                this.data.vendors = org.vendors;
            },
            err => {
                console.log(err);
            });
   }
   
  
}
