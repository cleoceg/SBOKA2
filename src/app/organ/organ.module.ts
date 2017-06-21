import { NgModule } from "@angular/core";
//import { HttpModule } from "@angular/http"; // new
import { BrowserModule }  from '@angular/platform-browser';
import { OrganIntroComponent } from './organ.intro.component';
import { OrganRolesComponent } from './organ.roles.component';
import { OrganProjectComponent } from './organ.project.component';
import { OrganOwnerComponent } from './organ.owner.component';
import { OrganMasterComponent } from './organ.master.component';
import { OrganTeamComponent } from './organ.team.component';
import { OrganPortfolioComponent } from './organ.portfolio.component';
import { OrganSummaryComponent } from './organ.summary.component';
import { OrganVsComponent } from './organ.vs.component';
import { OrganTheoriesComponent } from './organ.theories.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { OrganService } from './organ.service';

const routes: Routes = [
  { path: 'org_intro', component: OrganIntroComponent },
  { path: 'org_roles', component: OrganRolesComponent },
  { path: 'org_project', component: OrganProjectComponent },
  { path: 'org_owner', component: OrganOwnerComponent },
  { path: 'org_master', component: OrganMasterComponent },
  { path: 'org_team', component: OrganTeamComponent },
  { path: 'org_portfolio', component: OrganPortfolioComponent },
  { path: 'org_summary', component: OrganSummaryComponent },
  { path: 'org_versus', component: OrganVsComponent },
  { path: 'org_theories', component: OrganTheoriesComponent }
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
        OrganIntroComponent,
        OrganRolesComponent,
        OrganProjectComponent,
        OrganOwnerComponent,
        OrganMasterComponent,
        OrganTeamComponent,
        OrganPortfolioComponent,
        OrganSummaryComponent,
        OrganVsComponent,
        OrganTheoriesComponent
    ],
    providers: [OrganService],
    exports: [
        OrganIntroComponent,
        OrganRolesComponent,
        OrganProjectComponent,
        OrganOwnerComponent,
        OrganMasterComponent,
        OrganTeamComponent,
        OrganPortfolioComponent,
        OrganSummaryComponent,
        OrganVsComponent,
        OrganTheoriesComponent
    ]
})
export class OrganModule { }

