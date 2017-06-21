import { NgModule } from "@angular/core";
//import { HttpModule } from "@angular/http"; // new
import { BrowserModule }  from '@angular/platform-browser';
import { PhsPhasesComponent } from './phs.phases.component';
import { PhsInitiateComponent } from './phs.initiate.component';
import { PhsPlanComponent } from './phs.plan.component';
import { PhsImplementComponent } from './phs.implement.component';
import { PhsReviewComponent } from './phs.review.component';
import { PhsReleaseComponent } from './phs.release.component';
import { PhsProcessusComponent } from './phs.processus.component';

import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { PhsService } from './phs.service';

const routes: Routes = [
  { path: 'phases', component: PhsPhasesComponent },
  { path: 'Initiate', component: PhsInitiateComponent },
  { path: 'Plan', component: PhsPlanComponent },
  { path: 'Implement', component: PhsImplementComponent },
  { path: 'Review', component: PhsReviewComponent },
  { path: 'Release', component: PhsReleaseComponent },
  { path: 'processus/:id', component: PhsProcessusComponent }
  
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
        PhsPhasesComponent,
        PhsInitiateComponent,
        PhsProcessusComponent,
        PhsPlanComponent,
        PhsImplementComponent,
        PhsReviewComponent,
        PhsReleaseComponent
    ],
    providers: [PhsService],
    exports: [
        PhsPhasesComponent,
        PhsInitiateComponent,
        PhsProcessusComponent,
        PhsPlanComponent,
        PhsImplementComponent,
        PhsReviewComponent,
        PhsReleaseComponent
    ]
})
export class PhsModule { }

