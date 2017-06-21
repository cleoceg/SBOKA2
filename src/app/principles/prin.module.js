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
var prin_intro_component_1 = require("./prin.intro.component");
var prin_epc_component_1 = require("./prin.epc.component");
var prin_selforg_component_1 = require("./prin.selforg.component");
var prin_collab_component_1 = require("./prin.collab.component");
var prin_vb_component_1 = require("./prin.vb.component");
var prin_time_component_1 = require("./prin.time.component");
var prin_iter_component_1 = require("./prin.iter.component");
var prin_vs_component_1 = require("./prin.vs.component");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var prin_service_1 = require("./prin.service");
var routes = [
    { path: 'prin_intro', component: prin_intro_component_1.PrinIntroComponent },
    { path: 'prin_epc', component: prin_epc_component_1.PrinEpcComponent },
    { path: 'prin_selforg', component: prin_selforg_component_1.PrinSelforgComponent },
    { path: 'prin_collab', component: prin_collab_component_1.PrinCollabComponent },
    { path: 'prin_vb', component: prin_vb_component_1.PrinVbComponent },
    { path: 'prin_time', component: prin_time_component_1.PrinTimeComponent },
    { path: 'prin_iter', component: prin_iter_component_1.PrinIterComponent },
    { path: 'prin_vs', component: prin_vs_component_1.PrinVsComponent }
];
var PrinModule = (function () {
    function PrinModule() {
    }
    return PrinModule;
}());
PrinModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            //HttpModule, // new
            router_1.RouterModule.forRoot(routes),
            http_1.HttpModule,
            http_1.JsonpModule
        ],
        declarations: [
            prin_intro_component_1.PrinIntroComponent,
            prin_epc_component_1.PrinEpcComponent,
            prin_selforg_component_1.PrinSelforgComponent,
            prin_collab_component_1.PrinCollabComponent,
            prin_vb_component_1.PrinVbComponent,
            prin_time_component_1.PrinTimeComponent,
            prin_iter_component_1.PrinIterComponent,
            prin_vs_component_1.PrinVsComponent
        ],
        providers: [prin_service_1.PrinService],
        exports: [
            prin_intro_component_1.PrinIntroComponent,
            prin_epc_component_1.PrinEpcComponent,
            prin_selforg_component_1.PrinSelforgComponent,
            prin_collab_component_1.PrinCollabComponent,
            prin_vb_component_1.PrinVbComponent,
            prin_time_component_1.PrinTimeComponent,
            prin_iter_component_1.PrinIterComponent,
            prin_vs_component_1.PrinVsComponent
        ]
    })
], PrinModule);
exports.PrinModule = PrinModule;
//# sourceMappingURL=prin.module.js.map