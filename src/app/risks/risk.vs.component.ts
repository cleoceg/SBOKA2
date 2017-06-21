import { Component, OnInit } from '@angular/core';
//import { rsk_44 } from '../model/mock_risk';
import { risk_item } from '../model/risk';
import { RiskService } from './risk.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-risk-vs',
  templateUrl: 'app/risks/risk.vs.component.html'
})
export class RiskVsComponent implements OnInit{
    
   data = {
        id: '',
        title: '',
        comment: ['']
   }
   
   constructor(
            private riskservice: RiskService) {}
  
    ngOnInit() {
        this.getRisk();  
    }
   
   getRisk() {
        this.riskservice.getRiskVs().subscribe(
            risk => {
                //console.log(risk);
                this.data.id=risk.data;
                this.data.title = risk.title;
                this.data.comment = risk.comment;
            },
            err => {
                console.log(err);
            });
   }
   
   //getRskGen(rsk: string): risk_item {
    //    switch (rsk) {
    //        case '44':
    //            return rsk_44;
    //        
    //        default:
    //            this.getFake();
    //    }
   //}
  
   //getFake(): risk_item {
    //   return new risk_item('', '', '', ['']);
   //}
   
}










