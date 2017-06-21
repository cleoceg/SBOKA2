import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { JustifService } from './justif.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-justif-sum',
  templateUrl: 'app/justif/justif.summary.component.html'
})
export class JustifSummaryComponent implements OnInit {
    public data = {
        data: {},
        table: {}
    };

    constructor(
            private justifservice: JustifService) {}

    ngOnInit() {
        this.getJustif();
   }

    getJustif() {
       //console.log("debut getPrin");
       this.justifservice.getJustifSummary().subscribe(
            justif => {
                //console.log(justif);
                this.data.data = justif.data;
                this.data.table = justif.table;
            },
            err => {
                console.log(err);
            });
   }


}
