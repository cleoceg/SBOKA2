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
var RiskSumComponent = (function () {
    function RiskSumComponent(riskservice) {
        this.riskservice = riskservice;
        this.data = {
            data: {},
            table: {} //rsk_43
        };
    }
    RiskSumComponent.prototype.ngOnInit = function () {
        this.getRisk();
    };
    RiskSumComponent.prototype.getRisk = function () {
        var _this = this;
        this.riskservice.getRiskSum().subscribe(function (risk) {
            //console.log(risk);
            _this.data.data = risk.data;
            _this.data.table = risk.table;
        }, function (err) {
            console.log(err);
        });
    };
    return RiskSumComponent;
}());
RiskSumComponent = __decorate([
    core_1.Component({
        selector: 'my-risk-sum',
        templateUrl: 'app/risks/risk.sum.component.html'
    }),
    __metadata("design:paramtypes", [risk_service_1.RiskService])
], RiskSumComponent);
exports.RiskSumComponent = RiskSumComponent;
//# sourceMappingURL=risk.sum.component.js.map