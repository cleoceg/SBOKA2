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
var change_intro_component_1 = require("./change.intro.component");
var change_roles_component_1 = require("./change.roles.component");
var change_overview_component_1 = require("./change.overview.component");
var change_change_component_1 = require("./change.change.component");
var change_integ_component_1 = require("./change.integ.component");
var change_portfolio_component_1 = require("./change.portfolio.component");
var change_summary_component_1 = require("./change.summary.component");
var change_vs_component_1 = require("./change.vs.component");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var change_service_1 = require("./change.service");
var routes = [
    { path: 'chg_intro', component: change_intro_component_1.ChangeIntroComponent },
    { path: 'chg_roles', component: change_roles_component_1.ChangeRolesComponent },
    { path: 'chg_overview', component: change_overview_component_1.ChangeOverviewComponent },
    { path: 'chg_change', component: change_change_component_1.ChangeChangeComponent },
    { path: 'chg_integrating', component: change_integ_component_1.ChangeIntegComponent },
    { path: 'chg_portfolio', component: change_portfolio_component_1.ChangePortfolioComponent },
    { path: 'chg_summary', component: change_summary_component_1.ChangeSummaryComponent },
    { path: 'chg_vs', component: change_vs_component_1.ChangeVsComponent }
];
var ChangeModule = (function () {
    function ChangeModule() {
    }
    return ChangeModule;
}());
ChangeModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            //HttpModule, // new
            router_1.RouterModule.forRoot(routes),
            http_1.HttpModule,
            http_1.JsonpModule
        ],
        declarations: [
            change_intro_component_1.ChangeIntroComponent,
            change_roles_component_1.ChangeRolesComponent,
            change_overview_component_1.ChangeOverviewComponent,
            change_change_component_1.ChangeChangeComponent,
            change_integ_component_1.ChangeIntegComponent,
            change_portfolio_component_1.ChangePortfolioComponent,
            change_summary_component_1.ChangeSummaryComponent,
            change_vs_component_1.ChangeVsComponent
        ],
        providers: [change_service_1.ChangeService],
        exports: [
            change_intro_component_1.ChangeIntroComponent,
            change_roles_component_1.ChangeRolesComponent,
            change_overview_component_1.ChangeOverviewComponent,
            change_change_component_1.ChangeChangeComponent,
            change_integ_component_1.ChangeIntegComponent,
            change_portfolio_component_1.ChangePortfolioComponent,
            change_summary_component_1.ChangeSummaryComponent,
            change_vs_component_1.ChangeVsComponent
        ]
    })
], ChangeModule);
exports.ChangeModule = ChangeModule;
//# sourceMappingURL=change.module.js.map