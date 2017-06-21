import { Component, OnInit } from '@angular/core';
//import { rsk_01, rsk_02, rsk_03 } from '../model/mock_risk';
import { risk_item } from '../model/risk';
import { RiskService } from './risk.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-risk-role',
  templateUrl: 'app/risks/risk.role.component.html'
})
export class RiskRoleComponent implements OnInit {
    
    //data = {
    //   title: 'Risk: Roles Guide',
    //   role1: this.getRsk01(),
    //   role2: rsk_02,
    //   role3: rsk_03
    //}
    
    data = {
        data: {},
        role1: {},
        role2: {},
        role3: {}
    }
   
   constructor(
            private riskservice: RiskService) {}
  
    ngOnInit() {
        this.getRisk();  
    }
   
    //getRsk01(): risk_item {
    //   return rsk_01;
    //}
   
   getRisk() {
        this.riskservice.getRiskRole().subscribe(
            risk => {
                //console.log(risk);
                this.data.data=risk.data;
                this.data.role1=risk.role1;
                this.data.role2=risk.role2;
                this.data.role3=risk.role3;
            },
            err => {
                console.log(err);
            });
   }
}





