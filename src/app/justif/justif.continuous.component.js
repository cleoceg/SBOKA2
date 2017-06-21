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
var JustifContinuousComponent = (function () {
    function JustifContinuousComponent(justifservice) {
        this.justifservice = justifservice;
        this.data = {
            cfd: {},
            data: {},
            eva: {},
            eva_example: {},
            eva_overview: {},
            overview: {},
            table: {}
        };
    }
    JustifContinuousComponent.prototype.ngOnInit = function () {
        this.getJustif();
    };
    JustifContinuousComponent.prototype.getJustif = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.justifservice.getJustifContinuous().subscribe(function (justif) {
            //console.log(justif);
            _this.data.cfd = justif.cfd;
            _this.data.data = justif.data;
            _this.data.eva = justif.eva;
            _this.data.eva_example = justif.eva_example;
            _this.data.eva_overview = justif.eva_overview;
            _this.data.overview = justif.overview;
            _this.data.table = justif.table;
        }, function (err) {
            console.log(err);
        });
    };
    return JustifContinuousComponent;
}());
JustifContinuousComponent = __decorate([
    core_1.Component({
        selector: 'my-justif-cont',
        templateUrl: 'app/justif/justif.continuous.component.html'
    }),
    __metadata("design:paramtypes", [justif_service_1.JustifService])
], JustifContinuousComponent);
exports.JustifContinuousComponent = JustifContinuousComponent;
//# sourceMappingURL=justif.continuous.component.js.map