import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { OrganService } from './organ.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-organ-intro',
  templateUrl: 'app/organ/organ.intro.component.html'
})
export class OrganIntroComponent implements OnInit {
    public gen = {
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
       this.organservice.getOrganintro().subscribe(
            org => {
                this.gen.id=org.id;
                this.gen.title = org.title;
                this.gen.comment = org.comment;
            },
            err => {
                console.log(err);
            });
   }
   
  
}
