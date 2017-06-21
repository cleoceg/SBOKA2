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
var ChangeIntegComponent = (function () {
    function ChangeIntegComponent(changeservice) {
        this.changeservice = changeservice;
        this.data = {
            data: {},
            impact: {},
            managing: {},
            overview: {},
            pbrm: {},
            ppbg: {},
            sprint: {}
        };
    }
    ChangeIntegComponent.prototype.ngOnInit = function () {
        this.getQuality();
    };
    ChangeIntegComponent.prototype.getQuality = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.changeservice.getChangeInteg().subscribe(function (chg) {
            //console.log(chg);
            _this.data.data = chg.data;
            _this.data.impact = chg.impact;
            _this.data.managing = chg.managing;
            _this.data.overview = chg.overview;
            _this.data.pbrm = chg.pbrm;
            _this.data.ppbg = chg.ppbg;
            _this.data.sprint = chg.sprint;
        }, function (err) {
            console.log(err);
        });
    };
    return ChangeIntegComponent;
}());
ChangeIntegComponent = __decorate([
    core_1.Component({
        selector: 'my-chg-integ',
        templateUrl: 'app/change/change.integ.component.html'
    }),
    __metadata("design:paramtypes", [change_service_1.ChangeService])
], ChangeIntegComponent);
exports.ChangeIntegComponent = ChangeIntegComponent;
//# sourceMappingURL=change.integ.component.js.map