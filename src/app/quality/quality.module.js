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
var quality_intro_component_1 = require("./quality.intro.component");
var quality_role_component_1 = require("./quality.role.component");
var quality_defined_component_1 = require("./quality.defined.component");
var quality_accept_component_1 = require("./quality.accept.component");
var quality_mgt_component_1 = require("./quality.mgt.component");
var quality_summary_component_1 = require("./quality.summary.component");
var quality_vs_component_1 = require("./quality.vs.component");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var quality_service_1 = require("./quality.service");
var routes = [
    { path: 'qual_intro', component: quality_intro_component_1.QualityIntroComponent },
    { path: 'qual_roles', component: quality_role_component_1.QualityRoleComponent },
    { path: 'qual_defined', component: quality_defined_component_1.QualityDefinedComponent },
    { path: 'qual_acceptance', component: quality_accept_component_1.QualityAcceptComponent },
    { path: 'qual_mgt', component: quality_mgt_component_1.QualityMgtComponent },
    { path: 'qual_summary', component: quality_summary_component_1.QualitySummaryComponent },
    { path: 'qual_vs', component: quality_vs_component_1.QualityVsComponent }
];
var QualityModule = (function () {
    function QualityModule() {
    }
    return QualityModule;
}());
QualityModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            //HttpModule, // new
            router_1.RouterModule.forRoot(routes),
            http_1.HttpModule,
            http_1.JsonpModule
        ],
        declarations: [
            quality_intro_component_1.QualityIntroComponent,
            quality_role_component_1.QualityRoleComponent,
            quality_defined_component_1.QualityDefinedComponent,
            quality_accept_component_1.QualityAcceptComponent,
            quality_mgt_component_1.QualityMgtComponent,
            quality_summary_component_1.QualitySummaryComponent,
            quality_vs_component_1.QualityVsComponent
        ],
        providers: [quality_service_1.QualityService],
        exports: [
            quality_intro_component_1.QualityIntroComponent,
            quality_role_component_1.QualityRoleComponent,
            quality_defined_component_1.QualityDefinedComponent,
            quality_accept_component_1.QualityAcceptComponent,
            quality_mgt_component_1.QualityMgtComponent,
            quality_summary_component_1.QualitySummaryComponent,
            quality_vs_component_1.QualityVsComponent
        ]
    })
], QualityModule);
exports.QualityModule = QualityModule;
//# sourceMappingURL=quality.module.js.map