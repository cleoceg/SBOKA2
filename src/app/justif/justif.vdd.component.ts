import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { JustifService } from './justif.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-justif-vdd',
  templateUrl: 'app/justif/justif.vdd.component.html'
})
export class JustifVddComponent implements OnInit {
    public data = {
        overview: {},
        resp_other: {},
        resp_owner: {},
        vdd: {}
    };
    
    constructor(
            private justifservice: JustifService) {}
  
    ngOnInit() {
        this.getJustif();  
   }
   
    getJustif() {
       //console.log("debut getPrin");
       this.justifservice.getJustifVdd().subscribe(
            justif => {
                //console.log(justif);
                this.data.overview=justif.overview;
                this.data.resp_other = justif.resp_other;
                this.data.resp_owner = justif.resp_owner;
                this.data.vdd = justif.vdd
            },
            err => {
                console.log(err);
            });
   }
   
  
}
