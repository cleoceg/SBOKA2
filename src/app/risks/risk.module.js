"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var risk_role_component_1 = require("./risk.role.component");
var risk_what_component_1 = require("./risk.what.component");
var risk_mgt_component_1 = require("./risk.mgt.component");
var risk_min_component_1 = require("./risk.min.component");
var risk_portf_component_1 = require("./risk.portf.component");
var risk_sum_component_1 = require("./risk.sum.component");
var risk_vs_component_1 = require("./risk.vs.component");
var router_1 = require("@angular/router");
var risk_service_1 = require("./risk.service");
var routes = [
    { path: 'risk_role', component: risk_role_component_1.RiskRoleComponent },
    { path: 'risk_what', component: risk_what_component_1.RiskWhatComponent },
    { path: 'risk_mgt', component: risk_mgt_component_1.RiskMgtComponent },
    { path: 'risk_mini', component: risk_min_component_1.RiskMinComponent },
    { path: 'risk_portfolio', component: risk_portf_component_1.RiskPortfComponent },
    { path: 'risk_summary', component: risk_sum_component_1.RiskSumComponent },
    { path: 'risk_vs', component: risk_vs_component_1.RiskVsComponent }
];
var RiskModule = (function () {
    function RiskModule() {
    }
    return RiskModule;
}());
RiskModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes)
        ],
        declarations: [
            risk_role_component_1.RiskRoleComponent,
            risk_what_component_1.RiskWhatComponent,
            risk_mgt_component_1.RiskMgtComponent,
            risk_min_component_1.RiskMinComponent,
            risk_portf_component_1.RiskPortfComponent,
            risk_sum_component_1.RiskSumComponent,
            risk_vs_component_1.RiskVsComponent
        ],
        providers: [risk_service_1.RiskService],
        exports: [
            risk_role_component_1.RiskRoleComponent,
            risk_what_component_1.RiskWhatComponent,
            risk_mgt_component_1.RiskMgtComponent,
            risk_min_component_1.RiskMinComponent,
            risk_portf_component_1.RiskPortfComponent,
            risk_sum_component_1.RiskSumComponent,
            risk_vs_component_1.RiskVsComponent,
            router_1.RouterModule
        ]
    })
], RiskModule);
exports.RiskModule = RiskModule;
//# sourceMappingURL=risk.module.js.map