import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home.component';
import { AboutComponent } from './about/about.component';
import { RiskRoleComponent } from './risks/risk.role.component';
import { RiskWhatComponent } from './risks/risk.what.component';
import { RiskMgtComponent } from './risks/risk.mgt.component';
import { RiskMinComponent } from './risks/risk.min.component';
import { RiskPortfComponent } from './risks/risk.portf.component';
import { RiskSumComponent } from './risks/risk.sum.component';
import { RiskVsComponent } from './risks/risk.vs.component';
//import { RiskModule } from './risks/risk.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
      path: 'about',
      component: AboutComponent
  }
  //{ path: 'risk_role', component: RiskRoleComponent },
  //{ path: 'risk_what', component: RiskWhatComponent },
  //{ path: 'risk_mgt', component: RiskMgtComponent },
  //{ path: 'risk_mini', component: RiskMinComponent },
  //{ path: 'risk_portfolio', component: RiskPortfComponent },
  //{ path: 'risk_summary', component: RiskSumComponent },
  //{ path: 'risk_vs', component: RiskVsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
