import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { ChangeService } from './change.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-chg-roles',
  templateUrl: 'app/change/change.roles.component.html'
})
export class ChangeRolesComponent implements OnInit {
    public gen = {
        id: '',
        title: '',
        comment: ['']
    };
    
    constructor(
            private changeservice: ChangeService) {}
  
    ngOnInit() {
        this.getQuality();  
   }
   
    getQuality() {
       //console.log("debut getPrin");
       this.changeservice.getChangeRoles().subscribe(
            qual => {
                //console.log(qual);
                this.gen.id=qual.id;
                this.gen.title = qual.title;
                this.gen.comment = qual.comment;
            },
            err => {
                console.log(err);
            });
   }
   
  
}
