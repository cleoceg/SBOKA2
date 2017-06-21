"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { HttpModule } from "@angular/http"; // new
var platform_browser_1 = require("@angular/platform-browser");
var organ_intro_component_1 = require("./organ.intro.component");
var organ_roles_component_1 = require("./organ.roles.component");
var organ_project_component_1 = require("./organ.project.component");
var organ_owner_component_1 = require("./organ.owner.component");
var organ_master_component_1 = require("./organ.master.component");
var organ_team_component_1 = require("./organ.team.component");
var organ_portfolio_component_1 = require("./organ.portfolio.component");
var organ_summary_component_1 = require("./organ.summary.component");
var organ_vs_component_1 = require("./organ.vs.component");
var organ_theories_component_1 = require("./organ.theories.component");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var organ_service_1 = require("./organ.service");
var routes = [
    { path: 'org_intro', component: organ_intro_component_1.OrganIntroComponent },
    { path: 'org_roles', component: organ_roles_component_1.OrganRolesComponent },
    { path: 'org_project', component: organ_project_component_1.OrganProjectComponent },
    { path: 'org_owner', component: organ_owner_component_1.OrganOwnerComponent },
    { path: 'org_master', component: organ_master_component_1.OrganMasterComponent },
    { path: 'org_team', component: organ_team_component_1.OrganTeamComponent },
    { path: 'org_portfolio', component: organ_portfolio_component_1.OrganPortfolioComponent },
    { path: 'org_summary', component: organ_summary_component_1.OrganSummaryComponent },
    { path: 'org_versus', component: organ_vs_component_1.OrganVsComponent },
    { path: 'org_theories', component: organ_theories_component_1.OrganTheoriesComponent }
];
var OrganModule = (function () {
    function OrganModule() {
    }
    return OrganModule;
}());
OrganModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            //HttpModule, // new
            router_1.RouterModule.forRoot(routes),
            http_1.HttpModule,
            http_1.JsonpModule
        ],
        declarations: [
            organ_intro_component_1.OrganIntroComponent,
            organ_roles_component_1.OrganRolesComponent,
            organ_project_component_1.OrganProjectComponent,
            organ_owner_component_1.OrganOwnerComponent,
            organ_master_component_1.OrganMasterComponent,
            organ_team_component_1.OrganTeamComponent,
            organ_portfolio_component_1.OrganPortfolioComponent,
            organ_summary_component_1.OrganSummaryComponent,
            organ_vs_component_1.OrganVsComponent,
            organ_theories_component_1.OrganTheoriesComponent
        ],
        providers: [organ_service_1.OrganService],
        exports: [
            organ_intro_component_1.OrganIntroComponent,
            organ_roles_component_1.OrganRolesComponent,
            organ_project_component_1.OrganProjectComponent,
            organ_owner_component_1.OrganOwnerComponent,
            organ_master_component_1.OrganMasterComponent,
            organ_team_component_1.OrganTeamComponent,
            organ_portfolio_component_1.OrganPortfolioComponent,
            organ_summary_component_1.OrganSummaryComponent,
            organ_vs_component_1.OrganVsComponent,
            organ_theories_component_1.OrganTheoriesComponent
        ]
    })
], OrganModule);
exports.OrganModule = OrganModule;
//# sourceMappingURL=organ.module.js.map