import { NgModule } from "@angular/core";
//import { HttpModule } from "@angular/http"; // new
import { BrowserModule }  from '@angular/platform-browser';
import { PrinIntroComponent } from './prin.intro.component';
import { PrinEpcComponent } from './prin.epc.component';
import { PrinSelforgComponent } from './prin.selforg.component';
import { PrinCollabComponent } from './prin.collab.component';
import { PrinVbComponent } from './prin.vb.component';
import { PrinTimeComponent } from './prin.time.component';
import { PrinIterComponent } from './prin.iter.component';
import { PrinVsComponent } from './prin.vs.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { PrinService } from './prin.service';

const routes: Routes = [
  { path: 'prin_intro', component: PrinIntroComponent },
  { path: 'prin_epc', component: PrinEpcComponent },
  { path: 'prin_selforg', component: PrinSelforgComponent },
  { path: 'prin_collab', component: PrinCollabComponent },
  { path: 'prin_vb', component: PrinVbComponent },
  { path: 'prin_time', component: PrinTimeComponent },
  { path: 'prin_iter', component: PrinIterComponent },
  { path: 'prin_vs', component: PrinVsComponent }
];


@NgModule({
    imports: [
        BrowserModule,
        //HttpModule, // new
        RouterModule.forRoot(routes),
        HttpModule,
        JsonpModule
    ],
    declarations: [
        PrinIntroComponent,
        PrinEpcComponent,
        PrinSelforgComponent,
        PrinCollabComponent,
        PrinVbComponent,
        PrinTimeComponent,
        PrinIterComponent,
        PrinVsComponent
    ],
    providers: [PrinService],
    exports: [
        PrinIntroComponent,
        PrinEpcComponent,
        PrinSelforgComponent,
        PrinCollabComponent,
        PrinVbComponent,
        PrinTimeComponent,
        PrinIterComponent,
        PrinVsComponent
    ]
})
export class PrinModule { }
