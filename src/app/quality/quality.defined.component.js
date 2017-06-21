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
var quality_service_1 = require("./quality.service");
var QualityDefinedComponent = (function () {
    function QualityDefinedComponent(qualityservice) {
        this.qualityservice = qualityservice;
        this.data = {
            data: {},
            overview: {},
            scope: {},
            value: {}
        };
    }
    QualityDefinedComponent.prototype.ngOnInit = function () {
        this.getQuality();
    };
    QualityDefinedComponent.prototype.getQuality = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.qualityservice.getQualDefined().subscribe(function (qual) {
            //console.log(qual);
            _this.data.data = qual.data;
            _this.data.overview = qual.overview;
            _this.data.scope = qual.scope;
            _this.data.value = qual.value;
        }, function (err) {
            console.log(err);
        });
    };
    return QualityDefinedComponent;
}());
QualityDefinedComponent = __decorate([
    core_1.Component({
        selector: 'my-qual-def',
        templateUrl: 'app/quality/quality.defined.component.html'
    }),
    __metadata("design:paramtypes", [quality_service_1.QualityService])
], QualityDefinedComponent);
exports.QualityDefinedComponent = QualityDefinedComponent;
//# sourceMappingURL=quality.defined.component.js.map