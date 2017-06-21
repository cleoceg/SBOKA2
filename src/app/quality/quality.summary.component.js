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
var QualitySummaryComponent = (function () {
    function QualitySummaryComponent(qualityservice) {
        this.qualityservice = qualityservice;
        this.data = {
            data: {},
            table: {}
        };
    }
    QualitySummaryComponent.prototype.ngOnInit = function () {
        this.getQuality();
    };
    QualitySummaryComponent.prototype.getQuality = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.qualityservice.getQualSummary().subscribe(function (qual) {
            //console.log(qual);
            _this.data.data = qual.data;
            _this.data.table = qual.table;
        }, function (err) {
            console.log(err);
        });
    };
    return QualitySummaryComponent;
}());
QualitySummaryComponent = __decorate([
    core_1.Component({
        selector: 'my-qual-sum',
        templateUrl: 'app/quality/quality.summary.component.html'
    }),
    __metadata("design:paramtypes", [quality_service_1.QualityService])
], QualitySummaryComponent);
exports.QualitySummaryComponent = QualitySummaryComponent;
//# sourceMappingURL=quality.summary.component.js.map