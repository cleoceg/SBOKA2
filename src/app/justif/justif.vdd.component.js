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
var JustifVddComponent = (function () {
    function JustifVddComponent(justifservice) {
        this.justifservice = justifservice;
        this.data = {
            overview: {},
            resp_other: {},
            resp_owner: {},
            vdd: {}
        };
    }
    JustifVddComponent.prototype.ngOnInit = function () {
        this.getJustif();
    };
    JustifVddComponent.prototype.getJustif = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.justifservice.getJustifVdd().subscribe(function (justif) {
            //console.log(justif);
            _this.data.overview = justif.overview;
            _this.data.resp_other = justif.resp_other;
            _this.data.resp_owner = justif.resp_owner;
            _this.data.vdd = justif.vdd;
        }, function (err) {
            console.log(err);
        });
    };
    return JustifVddComponent;
}());
JustifVddComponent = __decorate([
    core_1.Component({
        selector: 'my-justif-vdd',
        templateUrl: 'app/justif/justif.vdd.component.html'
    }),
    __metadata("design:paramtypes", [justif_service_1.JustifService])
], JustifVddComponent);
exports.JustifVddComponent = JustifVddComponent;
//# sourceMappingURL=justif.vdd.component.js.map