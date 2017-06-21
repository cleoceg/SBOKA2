import { Component, OnInit } from '@angular/core';
//import { rsk_05, rsk_06, rsk_07, rsk_08, rsk_09, rsk_10 } from '../model/mock_risk';
import { risk_item } from '../model/risk';
import { RiskService } from './risk.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-risk-what',
  templateUrl: 'app/risks/risk.what.component.html'
})
export class RiskWhatComponent {
    
   //data = {
   //    title: 'What is Risk?',
    //   gen: this.getRsk05(),
    //   risks: this.getRsk06(),
    //   issues: this.getRsk07(),
    //   risk_conclusions: this.getRsk08(),
    //   attitude: this.getRsk09(),
    //   utility: this.getRsk10()
   //}
   
   data = {
       data: {},
       gen: {},
       risks: {},
       issues: {},
       risk_conclusions: {},
       attitude: {},
       utility: {}
   }
   
   constructor(
            private riskservice: RiskService) {}
  
    ngOnInit() {
        this.getRisk();  
    }
   
   getRisk() {
        this.riskservice.getRiskWhat().subscribe(
            risk => {
                //console.log(risk);
                this.data.data=risk.data;
                this.data.gen=risk.gen;
                this.data.risks=risk.risks;
                this.data.issues=risk.issues;
                this.data.risk_conclusions=risk.risk_conclusions;
                this.data.attitude=risk.attitude;
                this.data.utility=risk.utility;
            },
            err => {
                console.log(err);
            });
   }
   
   //getRsk05(): risk_item {
   //    return rsk_05;
   //}
   
   //getRsk06(): risk_item {
   //    return rsk_06;
   //}
   
   //getRsk07(): risk_item {
   //    return rsk_07;
   //}
   
   //getRsk08(): risk_item {
   //    return rsk_08;
   //}
   
   //getRsk09(): risk_item {
   //    return rsk_09;
   //}
   
   //getRsk10(): risk_item {
   //    return rsk_10;
   //}
   
   //getFake(): risk_item {
   //    return new risk_item('', '', '', ['']);
   //}
}






