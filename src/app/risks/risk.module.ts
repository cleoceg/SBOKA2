import { NgModule } from "@angular/core";
import { BrowserModule }  from '@angular/platform-browser';
import { RiskRoleComponent } from './risk.role.component';
import { RiskWhatComponent } from './risk.what.component';
import { RiskMgtComponent } from './risk.mgt.component';
import { RiskMinComponent } from './risk.min.component';
import { RiskPortfComponent } from './risk.portf.component';
import { RiskSumComponent } from './risk.sum.component';
import { RiskVsComponent } from './risk.vs.component';
import { RouterModule, Routes } from '@angular/router';
import { RiskService } from './risk.service';

const routes: Routes = [
  { path: 'risk_role', component: RiskRoleComponent },
  { path: 'risk_what', component: RiskWhatComponent },
  { path: 'risk_mgt', component: RiskMgtComponent },
  { path: 'risk_mini', component: RiskMinComponent },
  { path: 'risk_portfolio', component: RiskPortfComponent },
  { path: 'risk_summary', component: RiskSumComponent },
  { path: 'risk_vs', component: RiskVsComponent }
];


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        RiskRoleComponent, 
        RiskWhatComponent, 
        RiskMgtComponent, 
        RiskMinComponent,
        RiskPortfComponent,
        RiskSumComponent,
        RiskVsComponent
    ],
    providers: [RiskService],
    exports: [
        RiskRoleComponent, 
        RiskWhatComponent, 
        RiskMgtComponent, 
        RiskMinComponent,
        RiskPortfComponent,
        RiskSumComponent,
        RiskVsComponent,
        RouterModule
    ]
})
export class RiskModule { }
