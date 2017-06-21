import { Component, OnInit } from '@angular/core';
//import { rsk_38, rsk_39, rsk_40, rsk_41 } from '../model/mock_risk';
import { risk_item } from '../model/risk';
import { RiskService } from './risk.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-risk-portf',
  templateUrl: 'app/risks/risk.portf.component.html'
})
export class RiskPortfComponent implements OnInit {
    
   data = {
        data: {}, //this.getRskGen('41'),
        intro: {}, //this.getRskGen('38'),
        inportfolio: {}, //this.getRskGen('39'),
        inprogram: {} //this.getRskGen('40')
   }
   
   constructor(
            private riskservice: RiskService) {}
  
    ngOnInit() {
        this.getRisk();  
    }
   
   getRisk() {
        this.riskservice.getRiskPortf().subscribe(
            risk => {
                //console.log(risk);
                this.data.data=risk.data;
                this.data.intro=risk.intro;
                this.data.inportfolio=risk.inportfolio;
                this.data.inprogram=risk.inprogram;
            },
            err => {
                console.log(err);
            });
   }
   
   //getRskGen(rsk: string): risk_item {
    //    switch (rsk) {
    //        case '38':
    //            return rsk_38;
    //        case '39':
    //            return rsk_39;
    //        case '40':
    //            return rsk_40;
    //        case '41':
    //            return rsk_41;
    //        
    //        default:
    //            this.getFake();
   //     }
   //}
  
   //getFake(): risk_item {
   //    return new risk_item('', '', '', ['']);
   //}
   
}









