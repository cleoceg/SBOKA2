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
var OrganProjectComponent = (function () {
    function OrganProjectComponent(organservice) {
        this.organservice = organservice;
        this.data = {
            SGB: {},
            core: {},
            data: {},
            noncore: {},
            overview: {},
            owner: {},
            sm: {},
            st: {},
            stakeholder: {},
            vendors: {}
        };
    }
    OrganProjectComponent.prototype.ngOnInit = function () {
        this.getOrgan();
    };
    OrganProjectComponent.prototype.getOrgan = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.organservice.getOrganproject().subscribe(function (org) {
            //console.log(org);
            _this.data.SGB = org.SGB;
            _this.data.core = org.core;
            _this.data.data = org.data;
            _this.data.noncore = org.noncore;
            _this.data.overview = org.overview;
            _this.data.owner = org.owner;
            _this.data.sm = org.sm;
            _this.data.st = org.st;
            _this.data.stakeholder = org.stakeholder;
            _this.data.vendors = org.vendors;
        }, function (err) {
            console.log(err);
        });
    };
    return OrganProjectComponent;
}());
OrganProjectComponent = __decorate([
    core_1.Component({
        selector: 'my-organ-project',
        templateUrl: 'app/organ/organ.project.component.html'
    }),
    __metadata("design:paramtypes", [organ_service_1.OrganService])
], OrganProjectComponent);
exports.OrganProjectComponent = OrganProjectComponent;
//# sourceMappingURL=organ.project.component.js.map