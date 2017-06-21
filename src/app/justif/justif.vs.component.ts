import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { JustifService } from './justif.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-justif-vs',
  templateUrl: 'app/justif/justif.vs.component.html'
})
export class JustifVsComponent implements OnInit {
    public gen = {
        id: '',
        title: '',
        comment: ['']
    };
    
    constructor(
            private justifservice: JustifService) {}
  
    ngOnInit() {
        this.getJustif();  
   }
   
    getJustif() {
       //console.log("debut getPrin");
       this.justifservice.getJustifVs().subscribe(
            justif => {
                //console.log(justif);
                this.gen.id=justif.id;
                this.gen.title = justif.title;
                this.gen.comment = justif.comment;
            },
            err => {
                console.log(err);
            });
   }
   
  
}
