import { Component, OnInit } from '@angular/core';
//import { rsk_12, rsk_13, rsk_14, rsk_15, rsk_16, rsk_17, rsk_18, rsk_19, rsk_20, rsk_21, rsk_22, rsk_23, rsk_24, rsk_25, rsk_26, rsk_27, rsk_28, rsk_29 } from '../model/mock_risk';
import { risk_item } from '../model/risk';
import { RiskService } from './risk.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-risk-mgt',
  templateUrl: 'app/risks/risk.mgt.component.html'
})
export class RiskMgtComponent {
    
   data = {
        //title: 'Risk Management',
        data: {},
        overview: {}, //this.getRsk12(),
        identification: {}, //this.getRsk13(),
        risque1: {}, //this.getRsk14(),
        risque2: {}, //this.getRsk15(),
        risque3: {}, //this.getRsk16(),
        risque4: {}, //this.getRsk17(),
        risque5: {}, //this.getRsk18(),
        //techniques: this.getFake(),
        spike: {}, //this.getRsk19(),
        assess_gen: {},
        assess_overview: {}, //this.getRskGen('20'),
        assess_tech1: {}, //this.getRskGen('21'),
        assess_tech2: {}, //this.getRskGen('22'),
        assess_tech3: {}, //this.getRskGen('23'),
        assess_tech4: {}, //this.getRskGen('24'),
        assess_tech5: {}, //this.getRskGen('25'),
        prioritization: {}, //this.getRskGen('26'),
        mitigation: {}, //this.getRskGen('27'),
        burndown: {}, //this.getRskGen('28'),
        communication: {}, //this.getRskGen('29'),
   }
   
   constructor(
            private riskservice: RiskService) {}
  
    ngOnInit() {
        this.getRisk();  
    }
   
   
   
   getRisk() {
        this.riskservice.getRiskMgt().subscribe(
            risk => {
                //console.log(risk);
                this.data.assess_gen=risk.assess_gen;
                this.data.assess_overview=risk.assess_overview;
                this.data.assess_tech1=risk.assess_tech1;
                this.data.assess_tech2=risk.assess_tech2;
                this.data.assess_tech3=risk.assess_tech3;
                this.data.assess_tech4=risk.assess_tech4;
                this.data.assess_tech5=risk.assess_tech5;
                this.data.burndown=risk.burndown;
                this.data.communication=risk.communication;
                this.data.data=risk.data;
                this.data.identification=risk.identification;
                this.data.mitigation=risk.mitigation;
                this.data.overview=risk.overview;
                this.data.prioritization=risk.prioritization;
                this.data.spike=risk.spike;
                this.data.risque1=risk.risque1;
                this.data.risque2=risk.risque2;
                this.data.risque3=risk.risque3;
                this.data.risque4=risk.risque4;
                this.data.risque5=risk.risque5;
            },
            err => {
                console.log(err);
            });
   }
   
   //getRskGen(rsk: string): risk_item {
   //     switch (rsk) {
   //         case '20':
   //             return rsk_20;
   //        case '21':
    //            return rsk_21;
    //        case '22':
    //            return rsk_22;
    //        case '23':
    //            return rsk_23;
    //        case '24':
    //            return rsk_24;
    //        case '25':
    //            return rsk_25;
    //        case '26':
    //            return rsk_26;
    //        case '27':
    //            return rsk_27;
    //        case '28':
    //            return rsk_28;
    //        case '29':
    //            return rsk_29;
    //        default:
    //            this.getFake();
    //    }
   //}
  
   //getFake(): risk_item {
  //     return new risk_item('', '', '', ['']);
  // }
   
   //getRsk12(): risk_item {
   //    return rsk_12;
   //}
   
   //getRsk13(): risk_item {
   //    return rsk_13;
   //}
   
   //getRsk14(): risk_item {
   //    return rsk_14;
   //}
   
   //getRsk15(): risk_item {
   //    return rsk_15;
   //}
   
   //getRsk16(): risk_item {
   //    return rsk_16;
   //}
   
   //getRsk17(): risk_item {
   //    return rsk_17;
   //}
   
   //getRsk18(): risk_item {
   //    return rsk_18;
   //}
   
   //getRsk19(): risk_item {
   //    return rsk_19;
   //}
}







