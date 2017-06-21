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
var RiskMinComponent = (function () {
    function RiskMinComponent(riskservice) {
        this.riskservice = riskservice;
        this.data = {
            data: {},
            mini1: {},
            mini2: {},
            mini3: {},
            mini4: {},
            mini5: {} //this.getRskGen('36'),
        };
    }
    RiskMinComponent.prototype.ngOnInit = function () {
        this.getRisk();
    };
    RiskMinComponent.prototype.getRisk = function () {
        var _this = this;
        this.riskservice.getRiskMin().subscribe(function (risk) {
            //console.log(risk);
            _this.data.data = risk.data;
            _this.data.mini1 = risk.mini1;
            _this.data.mini2 = risk.mini2;
            _this.data.mini3 = risk.mini3;
            _this.data.mini4 = risk.mini4;
            _this.data.mini5 = risk.mini5;
        }, function (err) {
            console.log(err);
        });
    };
    return RiskMinComponent;
}());
RiskMinComponent = __decorate([
    core_1.Component({
        selector: 'my-risk-min',
        templateUrl: 'app/risks/risk.min.component.html'
    }),
    __metadata("design:paramtypes", [risk_service_1.RiskService])
], RiskMinComponent);
exports.RiskMinComponent = RiskMinComponent;
//# sourceMappingURL=risk.min.component.js.map