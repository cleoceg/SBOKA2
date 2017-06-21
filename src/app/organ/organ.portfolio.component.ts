import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { OrganService } from './organ.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-organ-portfolio',
  templateUrl: 'app/organ/organ.portfolio.component.html'
})
export class OrganPortfolioComponent implements OnInit {
    public data = {
        data: {},
        definition: {},
        examples: [{}],
        folios: {},
        involvment: {},
        managing: {},
        portfolio: {},
        programs: {},
        project: {},
        sos: {},
        working: {}
    };
    
    constructor(
            private organservice: OrganService) {}
  
    ngOnInit() {
        this.getOrgan();  
   }
   
    getOrgan() {
       //console.log("debut getPrin");
       this.organservice.getOrganPortfolio().subscribe(
            org => {
                //console.log(org);
                this.data.data = org.data;
                this.data.definition = org.definition;
                this.data.examples = org.examples;
                this.data.folios = org.folios;
                this.data.involvment = org.involvment;
                this.data.managing = org.managing;
                this.data.portfolio = org.portfolio;
                this.data.programs = org.programs;
                this.data.project = org.project;
                this.data.sos = org.sos;
                this.data.working = org.working;
            },
            err => {
                console.log(err);
            });
   }
   
  
}
