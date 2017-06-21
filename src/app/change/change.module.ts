import { NgModule } from "@angular/core";
//import { HttpModule } from "@angular/http"; // new
import { BrowserModule }  from '@angular/platform-browser';
import { ChangeIntroComponent } from './change.intro.component';
import { ChangeRolesComponent } from './change.roles.component';
import { ChangeOverviewComponent } from './change.overview.component';
import { ChangeChangeComponent } from './change.change.component';
import { ChangeIntegComponent } from './change.integ.component';
import { ChangePortfolioComponent } from './change.portfolio.component';
import { ChangeSummaryComponent } from './change.summary.component';
import { ChangeVsComponent } from './change.vs.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ChangeService } from './change.service';

const routes: Routes = [
  { path: 'chg_intro', component: ChangeIntroComponent },
  { path: 'chg_roles', component: ChangeRolesComponent },
  { path: 'chg_overview', component: ChangeOverviewComponent },
  { path: 'chg_change', component: ChangeChangeComponent },
  { path: 'chg_integrating', component: ChangeIntegComponent },
  { path: 'chg_portfolio', component: ChangePortfolioComponent },
  { path: 'chg_summary', component: ChangeSummaryComponent }
  { path: 'chg_vs', component: ChangeVsComponent }
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
        ChangeIntroComponent,
        ChangeRolesComponent,
        ChangeOverviewComponent,
        ChangeChangeComponent,
        ChangeIntegComponent,
        ChangePortfolioComponent,
        ChangeSummaryComponent,
        ChangeVsComponent
    ],
    providers: [ChangeService],
    exports: [
        ChangeIntroComponent,
        ChangeRolesComponent,
        ChangeOverviewComponent,
        ChangeChangeComponent,
        ChangeIntegComponent,
        ChangePortfolioComponent,
        ChangeSummaryComponent,
        ChangeVsComponent
    ]
})
export class ChangeModule { }
