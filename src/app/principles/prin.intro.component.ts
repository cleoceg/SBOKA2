import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { PrinService } from './prin.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-prin-intro',
  templateUrl: 'app/principles/prin.intro.component.html'
})
export class PrinIntroComponent implements OnInit {
    public gen = {
        id: '',
        title: '',
        comment: ['']
    };
    
    constructor(
            private prinservice: PrinService) {}
  
    ngOnInit() {
        this.getPrin();  
   }
   
    getPrin() {
       //console.log("debut getPrin");
       this.prinservice.getPrinintro().subscribe(
            prinintro => {
                this.gen.id=prinintro.id;
                this.gen.title = prinintro.title;
                this.gen.comment = prinintro.comment;
            },
            err => {
                console.log(err);
            });
   }
   
  
}








