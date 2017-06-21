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
var app_component_1 = require("./app.component");
var header_component_1 = require("./core/header.component");
var footer_component_1 = require("./core/footer.component");
var home_component_1 = require("./core/home.component");
var risk_module_1 = require("./risks/risk.module");
var prin_module_1 = require("./principles/prin.module");
var phs_module_1 = require("./phase/phs.module");
var organ_module_1 = require("./organ/organ.module");
var justif_module_1 = require("./justif/justif.module");
var quality_module_1 = require("./quality/quality.module");
var change_module_1 = require("./change/change.module");
var app_routing_module_1 = require("./app-routing.module");
var about_component_1 = require("./about/about.component");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            risk_module_1.RiskModule,
            prin_module_1.PrinModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            phs_module_1.PhsModule,
            organ_module_1.OrganModule,
            justif_module_1.JustifModule,
            quality_module_1.QualityModule,
            change_module_1.ChangeModule
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            footer_component_1.FooterComponent,
            home_component_1.HomeComponent,
            about_component_1.AboutComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map