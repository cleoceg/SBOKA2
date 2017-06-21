import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { PrinService } from './prin.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-prin-epc',
  templateUrl: 'app/principles/prin.epc.component.html'
})
export class PrinEpcComponent implements OnInit {
    public data = {
        epc: {},
        Adaptation: {
            part1: {},
            part2: {}
        },
        Inspection: {},
        Transparency: {} 
   };
    
    constructor(
            private prinservice: PrinService) {}
  
    ngOnInit() {
        this.getPrin();
        //console.log(this.data);
   }
   
    getPrin() {
       //console.log("debut getPrin");
       this.prinservice.getPrinEpc().subscribe(
            prinEpc => {
                //console.log(prinEpc);
                this.data.epc = prinEpc.epc;
                this.data.Adaptation = prinEpc.Adaptation;
                this.data.Inspection = prinEpc.Inspection;
                this.data.Transparency = prinEpc.Transparency;
            },
            err => {
                console.log(err);
            });
   }
   
  
}
