import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
//import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { PhsService } from './phs.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-phs-processus',
  templateUrl: 'app/phase/phs.processus.component.html'
})
export class PhsProcessusComponent implements OnInit {
    id: '';
    private sub: any;
    public data = {
        input: [{}],
        output: [{}],
        tools: [{}],
        processus: {}
    };
    
    constructor(
            private phsservice: PhsService,
            private route: ActivatedRoute) {}
  
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; // 
            this.getPhs();  
            //console.log(this.data);
        });  
   }
   
    getPhs() {
       //console.log("debut getPrin");
       this.phsservice.getPhsProcesus(this.id).subscribe(
            phs => {
                //console.log(phs);
                this.data.input = phs.input;
                this.data.output=phs.output;
                this.data.tools=phs.tools;
                this.data.processus=phs.processus;
            },
            err => {
                console.log(err);
            });
   }
   
  
}

