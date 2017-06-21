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
var JustifSummaryComponent = (function () {
    function JustifSummaryComponent(justifservice) {
        this.justifservice = justifservice;
        this.data = {
            data: {},
            table: {}
        };
    }
    JustifSummaryComponent.prototype.ngOnInit = function () {
        this.getJustif();
    };
    JustifSummaryComponent.prototype.getJustif = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.justifservice.getJustifSummary().subscribe(function (justif) {
            //console.log(justif);
            _this.data.data = justif.data;
            _this.data.table = justif.table;
        }, function (err) {
            console.log(err);
        });
    };
    return JustifSummaryComponent;
}());
JustifSummaryComponent = __decorate([
    core_1.Component({
        selector: 'my-justif-sum',
        templateUrl: 'app/justif/justif.summary.component.html'
    }),
    __metadata("design:paramtypes", [justif_service_1.JustifService])
], JustifSummaryComponent);
exports.JustifSummaryComponent = JustifSummaryComponent;
//# sourceMappingURL=justif.summary.component.js.map