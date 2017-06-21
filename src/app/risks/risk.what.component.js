"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var risk_service_1 = require("./risk.service");
var RiskWhatComponent = (function () {
    function RiskWhatComponent(riskservice) {
        this.riskservice = riskservice;
        //data = {
        //    title: 'What is Risk?',
        //   gen: this.getRsk05(),
        //   risks: this.getRsk06(),
        //   issues: this.getRsk07(),
        //   risk_conclusions: this.getRsk08(),
        //   attitude: this.getRsk09(),
        //   utility: this.getRsk10()
        //}
        this.data = {
            data: {},
            gen: {},
            risks: {},
            issues: {},
            risk_conclusions: {},
            attitude: {},
            utility: {}
        };
    }
    RiskWhatComponent.prototype.ngOnInit = function () {
        this.getRisk();
    };
    RiskWhatComponent.prototype.getRisk = function () {
        var _this = this;
        this.riskservice.getRiskWhat().subscribe(function (risk) {
            //console.log(risk);
            _this.data.data = risk.data;
            _this.data.gen = risk.gen;
            _this.data.risks = risk.risks;
            _this.data.issues = risk.issues;
            _this.data.risk_conclusions = risk.risk_conclusions;
            _this.data.attitude = risk.attitude;
            _this.data.utility = risk.utility;
        }, function (err) {
            console.log(err);
        });
    };
    return RiskWhatComponent;
}());
RiskWhatComponent = __decorate([
    core_1.Component({
        selector: 'my-risk-what',
        templateUrl: 'app/risks/risk.what.component.html'
    }),
    __metadata("design:paramtypes", [risk_service_1.RiskService])
], RiskWhatComponent);
exports.RiskWhatComponent = RiskWhatComponent;
//# sourceMappingURL=risk.what.component.js.map