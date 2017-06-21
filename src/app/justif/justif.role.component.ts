import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { prin_01 } from '../model/mock_prin';
import { risk_item } from '../model/risk';
import { JustifService } from './justif.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-justif-role',
  templateUrl: 'app/justif/justif.role.component.html'
})
export class JustifRoleComponent implements OnInit {
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
       this.justifservice.getJustifRole().subscribe(
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
