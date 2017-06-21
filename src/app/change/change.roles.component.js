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
var ChangeRolesComponent = (function () {
    function ChangeRolesComponent(changeservice) {
        this.changeservice = changeservice;
        this.gen = {
            id: '',
            title: '',
            comment: ['']
        };
    }
    ChangeRolesComponent.prototype.ngOnInit = function () {
        this.getQuality();
    };
    ChangeRolesComponent.prototype.getQuality = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.changeservice.getChangeRoles().subscribe(function (qual) {
            //console.log(qual);
            _this.gen.id = qual.id;
            _this.gen.title = qual.title;
            _this.gen.comment = qual.comment;
        }, function (err) {
            console.log(err);
        });
    };
    return ChangeRolesComponent;
}());
ChangeRolesComponent = __decorate([
    core_1.Component({
        selector: 'my-chg-roles',
        templateUrl: 'app/change/change.roles.component.html'
    }),
    __metadata("design:paramtypes", [change_service_1.ChangeService])
], ChangeRolesComponent);
exports.ChangeRolesComponent = ChangeRolesComponent;
//# sourceMappingURL=change.roles.component.js.map