import { Component, OnInit } from '@angular/core';
//import { rsk_42 } from '../model/mock_risk';
//import { rsk_43 } from '../model/mock_table';
import { risk_item } from '../model/risk';
import { RiskService } from './risk.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-risk-sum',
  templateUrl: 'app/risks/risk.sum.component.html'
})
export class RiskSumComponent implements OnInit {
    
   data = {
        data: {}, //this.getRskGen('42'),
        table: {} //rsk_43
   }
   
   constructor(
            private riskservice: RiskService) {}
  
    ngOnInit() {
        this.getRisk();  
    }
   
   getRisk() {
        this.riskservice.getRiskSum().subscribe(
            risk => {
                //console.log(risk);
                this.data.data=risk.data;
                this.data.table = risk.table;
                
            },
            err => {
                console.log(err);
            });
   }
   
   //getRskGen(rsk: string): risk_item {
   //     switch (rsk) {
    //        case '42':
   //             return rsk_42;
   //         
    //        default:
    //            this.getFake();
    //    }
   //}
  
   //getFake(): risk_item {
   //    return new risk_item('', '', '', ['']);
   //}
   
}