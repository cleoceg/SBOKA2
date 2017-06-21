import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { OrganService } from './organ.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-organ-team',
  templateUrl: 'app/organ/organ.team.component.html'
})
export class OrganTeamComponent implements OnInit {
    public data = {
        data: {},
        overview: {},
        perso: {},
        size: {},
        table: {}
    };
    
    constructor(
            private organservice: OrganService) {}
  
    ngOnInit() {
        this.getOrgan();  
   }
   
    getOrgan() {
       //console.log("debut getPrin");
       this.organservice.getOrganTeam().subscribe(
            org => {
                console.log(org);
                this.data.data = org.data;
                this.data.perso = org.perso;
                this.data.overview = org.overview;
                this.data.table = org.table;
                this.data.size = org.size;
            },
            err => {
                console.log(err);
            });
   }
   
  
}
