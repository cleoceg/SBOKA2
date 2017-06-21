import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { JustifService } from './justif.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-justif-cont',
  templateUrl: 'app/justif/justif.continuous.component.html'
})
export class JustifContinuousComponent implements OnInit {
    public data = {
        cfd: {},
        data: {},
        eva: {},
        eva_example: {},
        eva_overview: {},
        overview: {},
        table: {}
    };

    constructor(
            private justifservice: JustifService) {}

    ngOnInit() {
        this.getJustif();
   }

    getJustif() {
       //console.log("debut getPrin");
       this.justifservice.getJustifContinuous().subscribe(
            justif => {
                //console.log(justif);
                this.data.cfd=justif.cfd;
                this.data.data = justif.data;
                this.data.eva = justif.eva;
                this.data.eva_example = justif.eva_example;
                this.data.eva_overview = justif.eva_overview;
                this.data.overview = justif.overview;
                this.data.table = justif.table;
            },
            err => {
                console.log(err);
            });
   }


}
