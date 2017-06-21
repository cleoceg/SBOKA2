import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { JustifService } from './justif.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-justif-benef',
  templateUrl: 'app/justif/justif.benefits.component.html'
})
export class JustifBenefitsComponent implements OnInit {
    public data = {
        data: {},
        overview: {},
        prototype: {}
    };

    constructor(
            private justifservice: JustifService) {}

    ngOnInit() {
        this.getJustif();
   }

    getJustif() {
       //console.log("debut getPrin");
       this.justifservice.getJustifBenefits().subscribe(
            justif => {
                //console.log(justif);
                this.data.data = justif.data;
                this.data.overview = justif.overview;
                this.data.prototype = justif.prototype;
            },
            err => {
                console.log(err);
            });
   }


}

