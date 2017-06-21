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
var change_service_1 = require("./change.service");
var ChangeChangeComponent = (function () {
    function ChangeChangeComponent(changeservice) {
        this.changeservice = changeservice;
        this.data = {
            achieving: {},
            balancing: {},
            body: {},
            core_team: {},
            data: {},
            flex_cross: {},
            flex_customer: {},
            flex_integration: {},
            flex_iterative: {},
            flex_time: {},
            overview: {},
            senior: {},
            stakeholder: {}
        };
    }
    ChangeChangeComponent.prototype.ngOnInit = function () {
        this.getQuality();
    };
    ChangeChangeComponent.prototype.getQuality = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.changeservice.getChangeChange().subscribe(function (chg) {
            //console.log(chg);
            _this.data.achieving = chg.achieving;
            _this.data.balancing = chg.balancing;
            _this.data.body = chg.body;
            _this.data.core_team = chg.core_team;
            _this.data.data = chg.data;
            _this.data.flex_cross = chg.flex_cross;
            _this.data.flex_customer = chg.flex_customer;
            _this.data.flex_integration = chg.flex_integration;
            _this.data.flex_iterative = chg.flex_iterative;
            _this.data.flex_time = chg.flex_time;
            _this.data.overview = chg.overview;
            _this.data.senior = chg.senior;
            _this.data.stakeholder = chg.stakeholder;
        }, function (err) {
            console.log(err);
        });
    };
    return ChangeChangeComponent;
}());
ChangeChangeComponent = __decorate([
    core_1.Component({
        selector: 'my-chg-chg',
        templateUrl: 'app/change/change.change.component.html'
    }),
    __metadata("design:paramtypes", [change_service_1.ChangeService])
], ChangeChangeComponent);
exports.ChangeChangeComponent = ChangeChangeComponent;
//# sourceMappingURL=change.change.component.js.map