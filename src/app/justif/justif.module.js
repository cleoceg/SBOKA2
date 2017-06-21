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
var justif_intro_component_1 = require("./justif.intro.component");
var justif_role_component_1 = require("./justif.role.component");
var justif_vdd_component_1 = require("./justif.vdd.component");
var justif_importance_component_1 = require("./justif.importance.component");
var justif_technique_component_1 = require("./justif.technique.component");
var justif_continuous_component_1 = require("./justif.continuous.component");
var justif_benefits_component_1 = require("./justif.benefits.component");
var justif_summary_component_1 = require("./justif.summary.component");
var justif_vs_component_1 = require("./justif.vs.component");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var justif_service_1 = require("./justif.service");
var routes = [
    { path: 'bj_intro', component: justif_intro_component_1.JustifIntroComponent },
    { path: 'bj_roles', component: justif_role_component_1.JustifRoleComponent },
    { path: 'bj_vdd', component: justif_vdd_component_1.JustifVddComponent },
    { path: 'bj_importance', component: justif_importance_component_1.JustifImportanceComponent },
    { path: 'bj_techniques', component: justif_technique_component_1.JustifTechniqueComponent },
    { path: 'bj_continuous', component: justif_continuous_component_1.JustifContinuousComponent },
    { path: 'bj_benefits', component: justif_benefits_component_1.JustifBenefitsComponent },
    { path: 'bj_summary', component: justif_summary_component_1.JustifSummaryComponent },
    { path: 'bj_vs', component: justif_vs_component_1.JustifVsComponent }
];
var JustifModule = (function () {
    function JustifModule() {
    }
    return JustifModule;
}());
JustifModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            //HttpModule, // new
            router_1.RouterModule.forRoot(routes),
            http_1.HttpModule,
            http_1.JsonpModule
        ],
        declarations: [
            justif_intro_component_1.JustifIntroComponent,
            justif_role_component_1.JustifRoleComponent,
            justif_vdd_component_1.JustifVddComponent,
            justif_importance_component_1.JustifImportanceComponent,
            justif_technique_component_1.JustifTechniqueComponent,
            justif_continuous_component_1.JustifContinuousComponent,
            justif_benefits_component_1.JustifBenefitsComponent,
            justif_summary_component_1.JustifSummaryComponent,
            justif_vs_component_1.JustifVsComponent
        ],
        providers: [justif_service_1.JustifService],
        exports: [
            justif_intro_component_1.JustifIntroComponent,
            justif_role_component_1.JustifRoleComponent,
            justif_vdd_component_1.JustifVddComponent,
            justif_importance_component_1.JustifImportanceComponent,
            justif_technique_component_1.JustifTechniqueComponent,
            justif_continuous_component_1.JustifContinuousComponent,
            justif_benefits_component_1.JustifBenefitsComponent,
            justif_summary_component_1.JustifSummaryComponent,
            justif_vs_component_1.JustifVsComponent
        ]
    })
], JustifModule);
exports.JustifModule = JustifModule;
//# sourceMappingURL=justif.module.js.map