import { Component, OnInit } from '@angular/core';
//import { rsk_32, rsk_33, rsk_34, rsk_35, rsk_36, rsk_37 } from '../model/mock_risk';
import { risk_item } from '../model/risk';
import { RiskService } from './risk.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-risk-min',
  templateUrl: 'app/risks/risk.min.component.html'
})
export class RiskMinComponent implements OnInit {
    
   data = {
        data: {}, //this.getRskGen('37'),
        mini1: {}, //this.getRskGen('32'),
        mini2: {}, //this.getRskGen('33'),
        mini3: {}, //this.getRskGen('34'),
        mini4: {}, //this.getRskGen('35'),
        mini5: {} //this.getRskGen('36'),
   }
   
   constructor(
            private riskservice: RiskService) {}
  
    ngOnInit() {
        this.getRisk();  
    }
   
   getRisk() {
        this.riskservice.getRiskMin().subscribe(
            risk => {
                //console.log(risk);
                this.data.data=risk.data;
                this.data.mini1=risk.mini1;
                this.data.mini2=risk.mini2;
                this.data.mini3=risk.mini3;
                this.data.mini4=risk.mini4;
                this.data.mini5=risk.mini5;
            },
            err => {
                console.log(err);
            });
   }
   
   //getRskGen(rsk: string): risk_item {
    //    switch (rsk) {
    //        case '32':
    //            return rsk_32;
    //        case '33':
    //            return rsk_33;
    //        case '34':
    //            return rsk_34;
    //        case '35':
    //            return rsk_35;
    //        case '36':
    //            return rsk_36;
    //        case '37':
    //            return rsk_37;
    //        default:
    //            this.getFake();
    //    }
   //}
  
   //getFake(): risk_item {
    //   return new risk_item('', '', '', ['']);
   //} 
}








