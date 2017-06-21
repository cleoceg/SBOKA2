import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { risk_item } from '../model/risk';
import { PrinService } from './prin.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-prin-iter',
  templateUrl: 'app/principles/prin.iter.component.html'
})
export class PrinIterComponent implements OnInit {
    public data = {
        id: '',
        title: '',
        stitle: '' ,
        comment: [''],
        overview: {}
   };
    
    constructor(
            private prinservice: PrinService) {}
  
    ngOnInit() {
        this.getPrin();
        //console.log(this.data);
   }
   
    getPrin() {
       //console.log("debut getPrin");
       this.prinservice.getPrinIter().subscribe(
            prin => {
                //console.log(prin);
                this.data.overview = prin.overview;
                this.data.id = prin.id;
                this.data.title = prin.title;
                this.data.stitle = prin.stitle;
                this.data.comment = prin.comment;
            },
            err => {
                console.log(err);
            });
   }
   
  
}



