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
var organ_service_1 = require("./organ.service");
var OrganRolesComponent = (function () {
    function OrganRolesComponent(organservice) {
        this.organservice = organservice;
        this.gen = {
            id: '',
            title: '',
            comment: ['']
        };
    }
    OrganRolesComponent.prototype.ngOnInit = function () {
        this.getOrgan();
    };
    OrganRolesComponent.prototype.getOrgan = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.organservice.getOrganroles().subscribe(function (org) {
            _this.gen.id = org.id;
            _this.gen.title = org.title;
            _this.gen.comment = org.comment;
        }, function (err) {
            console.log(err);
        });
    };
    return OrganRolesComponent;
}());
OrganRolesComponent = __decorate([
    core_1.Component({
        selector: 'my-organ-roles',
        templateUrl: 'app/organ/organ.roles.component.html'
    }),
    __metadata("design:paramtypes", [organ_service_1.OrganService])
], OrganRolesComponent);
exports.OrganRolesComponent = OrganRolesComponent;
//# sourceMappingURL=organ.roles.component.js.map