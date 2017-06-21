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
var OrganTheoriesComponent = (function () {
    function OrganTheoriesComponent(organservice) {
        this.organservice = organservice;
        this.data = {
            conflict: {},
            data: {},
            leadership: {},
            maslow: {},
            servant: {},
            styles: {},
            techniques: {},
            tuckman: {},
            xy: {}
        };
    }
    OrganTheoriesComponent.prototype.ngOnInit = function () {
        this.getOrgan();
    };
    OrganTheoriesComponent.prototype.getOrgan = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.organservice.getOrganTheories().subscribe(function (org) {
            //console.log(org);
            _this.data.conflict = org.conflict;
            _this.data.data = org.data;
            _this.data.leadership = org.leadership;
            _this.data.maslow = org.maslow;
            _this.data.servant = org.servant;
            _this.data.styles = org.styles;
            _this.data.techniques = org.techniques;
            _this.data.tuckman = org.tuckman;
            _this.data.xy = org.xy;
        }, function (err) {
            console.log(err);
        });
    };
    return OrganTheoriesComponent;
}());
OrganTheoriesComponent = __decorate([
    core_1.Component({
        selector: 'my-organ-theories',
        templateUrl: 'app/organ/organ.theories.component.html'
    }),
    __metadata("design:paramtypes", [organ_service_1.OrganService])
], OrganTheoriesComponent);
exports.OrganTheoriesComponent = OrganTheoriesComponent;
//# sourceMappingURL=organ.theories.component.js.map