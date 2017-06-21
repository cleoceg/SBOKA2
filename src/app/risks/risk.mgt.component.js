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
var RiskMgtComponent = (function () {
    function RiskMgtComponent(riskservice) {
        this.riskservice = riskservice;
        this.data = {
            //title: 'Risk Management',
            data: {},
            overview: {},
            identification: {},
            risque1: {},
            risque2: {},
            risque3: {},
            risque4: {},
            risque5: {},
            //techniques: this.getFake(),
            spike: {},
            assess_gen: {},
            assess_overview: {},
            assess_tech1: {},
            assess_tech2: {},
            assess_tech3: {},
            assess_tech4: {},
            assess_tech5: {},
            prioritization: {},
            mitigation: {},
            burndown: {},
            communication: {},
        };
    }
    RiskMgtComponent.prototype.ngOnInit = function () {
        this.getRisk();
    };
    RiskMgtComponent.prototype.getRisk = function () {
        var _this = this;
        this.riskservice.getRiskMgt().subscribe(function (risk) {
            //console.log(risk);
            _this.data.assess_gen = risk.assess_gen;
            _this.data.assess_overview = risk.assess_overview;
            _this.data.assess_tech1 = risk.assess_tech1;
            _this.data.assess_tech2 = risk.assess_tech2;
            _this.data.assess_tech3 = risk.assess_tech3;
            _this.data.assess_tech4 = risk.assess_tech4;
            _this.data.assess_tech5 = risk.assess_tech5;
            _this.data.burndown = risk.burndown;
            _this.data.communication = risk.communication;
            _this.data.data = risk.data;
            _this.data.identification = risk.identification;
            _this.data.mitigation = risk.mitigation;
            _this.data.overview = risk.overview;
            _this.data.prioritization = risk.prioritization;
            _this.data.spike = risk.spike;
            _this.data.risque1 = risk.risque1;
            _this.data.risque2 = risk.risque2;
            _this.data.risque3 = risk.risque3;
            _this.data.risque4 = risk.risque4;
            _this.data.risque5 = risk.risque5;
        }, function (err) {
            console.log(err);
        });
    };
    return RiskMgtComponent;
}());
RiskMgtComponent = __decorate([
    core_1.Component({
        selector: 'my-risk-mgt',
        templateUrl: 'app/risks/risk.mgt.component.html'
    }),
    __metadata("design:paramtypes", [risk_service_1.RiskService])
], RiskMgtComponent);
exports.RiskMgtComponent = RiskMgtComponent;
//# sourceMappingURL=risk.mgt.component.js.map