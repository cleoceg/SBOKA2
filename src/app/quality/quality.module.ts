import { NgModule } from "@angular/core";
//import { HttpModule } from "@angular/http"; // new
import { BrowserModule }  from '@angular/platform-browser';
import { QualityIntroComponent } from './quality.intro.component';
import { QualityRoleComponent } from './quality.role.component';
import { QualityDefinedComponent } from './quality.defined.component';
import { QualityAcceptComponent } from './quality.accept.component';
import { QualityMgtComponent } from './quality.mgt.component';
import { QualitySummaryComponent } from './quality.summary.component';
import { QualityVsComponent } from './quality.vs.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { QualityService } from './quality.service';

const routes: Routes = [
  { path: 'qual_intro', component: QualityIntroComponent },
  { path: 'qual_roles', component: QualityRoleComponent },
  { path: 'qual_defined', component: QualityDefinedComponent },
  { path: 'qual_acceptance', component: QualityAcceptComponent },
  { path: 'qual_mgt', component: QualityMgtComponent },
  { path: 'qual_summary', component: QualitySummaryComponent },
  { path: 'qual_vs', component: QualityVsComponent }
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
        QualityIntroComponent,
        QualityRoleComponent,
        QualityDefinedComponent,
        QualityAcceptComponent,
        QualityMgtComponent,
        QualitySummaryComponent,
        QualityVsComponent
    ],
    providers: [QualityService],
    exports: [
        QualityIntroComponent,
        QualityRoleComponent,
        QualityDefinedComponent,
        QualityAcceptComponent,
        QualityMgtComponent,
        QualitySummaryComponent,
        QualityVsComponent
    ]
})
export class QualityModule { }



