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
var ChangeVsComponent = (function () {
    function ChangeVsComponent(changeservice) {
        this.changeservice = changeservice;
        this.data = {
            id: '',
            title: '',
            comment: ['']
        };
    }
    ChangeVsComponent.prototype.ngOnInit = function () {
        this.getQuality();
    };
    ChangeVsComponent.prototype.getQuality = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.changeservice.getChangeVs().subscribe(function (chg) {
            //console.log(chg);
            _this.data.id = chg.id;
            _this.data.title = chg.title;
            _this.data.comment = chg.comment;
        }, function (err) {
            console.log(err);
        });
    };
    return ChangeVsComponent;
}());
ChangeVsComponent = __decorate([
    core_1.Component({
        selector: 'my-chg-vs',
        templateUrl: 'app/change/change.vs.component.html'
    }),
    __metadata("design:paramtypes", [change_service_1.ChangeService])
], ChangeVsComponent);
exports.ChangeVsComponent = ChangeVsComponent;
//# sourceMappingURL=change.vs.component.js.map