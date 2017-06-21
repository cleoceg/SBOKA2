import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { risk_item } from '../model/risk';
import { PrinService } from './prin.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-prin-vb',
  templateUrl: 'app/principles/prin.vb.component.html'
})
export class PrinVbComponent implements OnInit {
    public data = {
        id: '',
        title: '',
        overview: {} ,
        comment: ['']
   };
    
    constructor(
            private prinservice: PrinService) {}
  
    ngOnInit() {
        this.getPrin();
        //console.log(this.data);
   }
   
    getPrin() {
       //console.log("debut getPrin");
       this.prinservice.getPrinVb().subscribe(
            prin => {
                //console.log(prin);
                this.data.overview = prin.overview;
                this.data.id = prin.id;
                this.data.title = prin.title;
                this.data.comment = prin.comment;
            },
            err => {
                console.log(err);
            });
   }
   
  
}

