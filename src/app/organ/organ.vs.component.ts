import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { OrganService } from './organ.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-organ-vs',
  templateUrl: 'app/organ/organ.vs.component.html'
})
export class OrganVsComponent implements OnInit {
    public data = {
        id: '',
        title: '',
        comment: ['']
    };
    
    constructor(
            private organservice: OrganService) {}
  
    ngOnInit() {
        this.getOrgan();  
   }
   
    getOrgan() {
       //console.log("debut getPrin");
       this.organservice.getOrganVs().subscribe(
            org => {
                //console.log(org);
                this.data.id = org.id;
                this.data.title = org.title;
                this.data.comment = org.comment;
            },
            err => {
                console.log(err);
            });
   }
   
  
}