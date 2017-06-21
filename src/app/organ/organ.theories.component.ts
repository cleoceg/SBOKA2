import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { OrganService } from './organ.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-organ-theories',
  templateUrl: 'app/organ/organ.theories.component.html'
})
export class OrganTheoriesComponent implements OnInit {
    public data = {
        conflict: {},
        data: {},
        leadership: {},
        maslow: {},
        servant: {},
        styles: {},
        techniques: {},
        tuckman: {},
        xy: {}
    };
    
    constructor(
            private organservice: OrganService) {}
  
    ngOnInit() {
        this.getOrgan();  
   }
   
    getOrgan() {
       //console.log("debut getPrin");
       this.organservice.getOrganTheories().subscribe(
            org => {
                //console.log(org);
                this.data.conflict = org.conflict;
                this.data.data = org.data;
                this.data.leadership = org.leadership;
                this.data.maslow = org.maslow;
                this.data.servant = org.servant;
                this.data.styles = org.styles;
                this.data.techniques = org.techniques;
                this.data.tuckman = org.tuckman;
                this.data.xy = org.xy;
            },
            err => {
                console.log(err);
            });
   }
   
  
}
