import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { ChangeService } from './change.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-chg-portfolio',
  templateUrl: 'app/change/change.portfolio.component.html'
})
export class ChangePortfolioComponent implements OnInit {
    public data = {
        data: {},
        inportfolio: {},
        inprogram: {}
    };
    
    constructor(
            private changeservice: ChangeService) {}
  
    ngOnInit() {
        this.getQuality();  
   }
   
    getQuality() {
       //console.log("debut getPrin");
       this.changeservice.getChangePortfolio().subscribe(
            chg => {
                //console.log(chg);
                this.data.data=chg.data;
                this.data.inportfolio = chg.inportfolio;
                this.data.inprogram = chg.inprogram;
            },
            err => {
                console.log(err);
            });
   }
   
  
}
