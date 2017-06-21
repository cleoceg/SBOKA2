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
var RiskRoleComponent = (function () {
    function RiskRoleComponent(riskservice) {
        this.riskservice = riskservice;
        //data = {
        //   title: 'Risk: Roles Guide',
        //   role1: this.getRsk01(),
        //   role2: rsk_02,
        //   role3: rsk_03
        //}
        this.data = {
            data: {},
            role1: {},
            role2: {},
            role3: {}
        };
    }
    RiskRoleComponent.prototype.ngOnInit = function () {
        this.getRisk();
    };
    //getRsk01(): risk_item {
    //   return rsk_01;
    //}
    RiskRoleComponent.prototype.getRisk = function () {
        var _this = this;
        this.riskservice.getRiskRole().subscribe(function (risk) {
            //console.log(risk);
            _this.data.data = risk.data;
            _this.data.role1 = risk.role1;
            _this.data.role2 = risk.role2;
            _this.data.role3 = risk.role3;
        }, function (err) {
            console.log(err);
        });
    };
    return RiskRoleComponent;
}());
RiskRoleComponent = __decorate([
    core_1.Component({
        selector: 'my-risk-role',
        templateUrl: 'app/risks/risk.role.component.html'
    }),
    __metadata("design:paramtypes", [risk_service_1.RiskService])
], RiskRoleComponent);
exports.RiskRoleComponent = RiskRoleComponent;
//# sourceMappingURL=risk.role.component.js.map