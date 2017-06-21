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
var justif_service_1 = require("./justif.service");
var JustifBenefitsComponent = (function () {
    function JustifBenefitsComponent(justifservice) {
        this.justifservice = justifservice;
        this.data = {
            data: {},
            overview: {},
            prototype: {}
        };
    }
    JustifBenefitsComponent.prototype.ngOnInit = function () {
        this.getJustif();
    };
    JustifBenefitsComponent.prototype.getJustif = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.justifservice.getJustifBenefits().subscribe(function (justif) {
            //console.log(justif);
            _this.data.data = justif.data;
            _this.data.overview = justif.overview;
            _this.data.prototype = justif.prototype;
        }, function (err) {
            console.log(err);
        });
    };
    return JustifBenefitsComponent;
}());
JustifBenefitsComponent = __decorate([
    core_1.Component({
        selector: 'my-justif-benef',
        templateUrl: 'app/justif/justif.benefits.component.html'
    }),
    __metadata("design:paramtypes", [justif_service_1.JustifService])
], JustifBenefitsComponent);
exports.JustifBenefitsComponent = JustifBenefitsComponent;
//# sourceMappingURL=justif.benefits.component.js.map