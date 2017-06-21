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
var phs_phases_component_1 = require("./phs.phases.component");
var phs_initiate_component_1 = require("./phs.initiate.component");
var phs_plan_component_1 = require("./phs.plan.component");
var phs_implement_component_1 = require("./phs.implement.component");
var phs_review_component_1 = require("./phs.review.component");
var phs_release_component_1 = require("./phs.release.component");
var phs_processus_component_1 = require("./phs.processus.component");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var phs_service_1 = require("./phs.service");
var routes = [
    { path: 'phases', component: phs_phases_component_1.PhsPhasesComponent },
    { path: 'Initiate', component: phs_initiate_component_1.PhsInitiateComponent },
    { path: 'Plan', component: phs_plan_component_1.PhsPlanComponent },
    { path: 'Implement', component: phs_implement_component_1.PhsImplementComponent },
    { path: 'Review', component: phs_review_component_1.PhsReviewComponent },
    { path: 'Release', component: phs_release_component_1.PhsReleaseComponent },
    { path: 'processus/:id', component: phs_processus_component_1.PhsProcessusComponent }
];
var PhsModule = (function () {
    function PhsModule() {
    }
    return PhsModule;
}());
PhsModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            //HttpModule, // new
            router_1.RouterModule.forRoot(routes),
            http_1.HttpModule,
            http_1.JsonpModule
        ],
        declarations: [
            phs_phases_component_1.PhsPhasesComponent,
            phs_initiate_component_1.PhsInitiateComponent,
            phs_processus_component_1.PhsProcessusComponent,
            phs_plan_component_1.PhsPlanComponent,
            phs_implement_component_1.PhsImplementComponent,
            phs_review_component_1.PhsReviewComponent,
            phs_release_component_1.PhsReleaseComponent
        ],
        providers: [phs_service_1.PhsService],
        exports: [
            phs_phases_component_1.PhsPhasesComponent,
            phs_initiate_component_1.PhsInitiateComponent,
            phs_processus_component_1.PhsProcessusComponent,
            phs_plan_component_1.PhsPlanComponent,
            phs_implement_component_1.PhsImplementComponent,
            phs_review_component_1.PhsReviewComponent,
            phs_release_component_1.PhsReleaseComponent
        ]
    })
], PhsModule);
exports.PhsModule = PhsModule;
//# sourceMappingURL=phs.module.js.map