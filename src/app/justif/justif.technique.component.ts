import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { JustifService } from './justif.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-justif-tech',
  templateUrl: 'app/justif/justif.technique.component.html'
})
export class JustifTechniqueComponent implements OnInit {
    public data = {
        customer: {},
        data: {},
        estimation: {},
        irr: {},
        irr_example: {},
        npv: {},
        npv_example: {},
        overview: {},
        planning: {
            overview: {}
        },
        ranking: {},
        roi: {},
        roi_example: {},
        story: {},
        vsm: {}
    };

    constructor(
            private justifservice: JustifService) {}

    ngOnInit() {
        this.getJustif();
   }

    getJustif() {
       //console.log("debut getPrin");
       this.justifservice.getJustifTechnique().subscribe(
            justif => {
                //console.log(justif);
                this.data.customer=justif.customer;
                this.data.data = justif.data;
                this.data.estimation = justif.estimation;
                this.data.irr = justif.irr;
                this.data.irr_example = justif.irr_example;
                this.data.npv = justif.npv;
                this.data.npv_example = justif.npv_example;
                this.data.overview = justif.overview;
                this.data.planning = justif.planning;
                this.data.planning.overview = justif.planning.overview;
                this.data.ranking = justif.ranking;
                this.data.roi = justif.roi;
                this.data.roi_example = justif.roi_example;
                this.data.story = justif.story;
                this.data.vsm = justif.vsm;
            },
            err => {
                console.log(err);
            });
   }


}
