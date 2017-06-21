import { NgModule } from "@angular/core";
//import { HttpModule } from "@angular/http"; // new
import { BrowserModule }  from '@angular/platform-browser';
import { JustifIntroComponent } from './justif.intro.component';
import { JustifRoleComponent } from './justif.role.component';
import { JustifVddComponent } from './justif.vdd.component';
import { JustifImportanceComponent } from './justif.importance.component';
import { JustifTechniqueComponent } from './justif.technique.component';
import { JustifContinuousComponent } from './justif.continuous.component';
import { JustifBenefitsComponent } from './justif.benefits.component';
import { JustifSummaryComponent } from './justif.summary.component';
import { JustifVsComponent } from './justif.vs.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { JustifService } from './justif.service';

const routes: Routes = [
  { path: 'bj_intro', component: JustifIntroComponent },
  { path: 'bj_roles', component: JustifRoleComponent },
  { path: 'bj_vdd', component: JustifVddComponent },
  { path: 'bj_importance', component: JustifImportanceComponent },
  { path: 'bj_techniques', component: JustifTechniqueComponent },
  { path: 'bj_continuous', component: JustifContinuousComponent },
  { path: 'bj_benefits', component: JustifBenefitsComponent },
  { path: 'bj_summary', component: JustifSummaryComponent },
  { path: 'bj_vs', component: JustifVsComponent }
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
        JustifIntroComponent,
        JustifRoleComponent,
        JustifVddComponent,
        JustifImportanceComponent,
        JustifTechniqueComponent,
        JustifContinuousComponent,
        JustifBenefitsComponent,
        JustifSummaryComponent,
        JustifVsComponent
    ],
    providers: [JustifService],
    exports: [
        JustifIntroComponent,
        JustifRoleComponent,
        JustifVddComponent,
        JustifImportanceComponent,
        JustifTechniqueComponent,
        JustifContinuousComponent,
        JustifBenefitsComponent,
        JustifSummaryComponent,
        JustifVsComponent
    ]
})
export class JustifModule { }


