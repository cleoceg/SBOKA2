import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { JustifService } from './justif.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-justif-imp',
  templateUrl: 'app/justif/justif.importance.component.html'
})
export class JustifImportanceComponent implements OnInit {
    public data = {
        data: {},
        factors: {},
        lifecycle: {},
        overview: {}
    };

    constructor(
            private justifservice: JustifService) {}

    ngOnInit() {
        this.getJustif();
   }

    getJustif() {
       //console.log("debut getPrin");
       this.justifservice.getJustifImportance().subscribe(
            justif => {
                //console.log(justif);
                this.data.overview=justif.overview;
                this.data.data = justif.data;
                this.data.factors = justif.factors;
                this.data.lifecycle = justif.lifecycle;
            },
            err => {
                console.log(err);
            });
   }


}
