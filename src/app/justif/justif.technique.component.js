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
var JustifTechniqueComponent = (function () {
    function JustifTechniqueComponent(justifservice) {
        this.justifservice = justifservice;
        this.data = {
            customer: {},
            data: {},
            estimation: {},
            irr: {},
            irr_example: {},
            npv: {},
            npv_example: {},
            overview: {},
            planning: {
                overview: {}
            },
            ranking: {},
            roi: {},
            roi_example: {},
            story: {},
            vsm: {}
        };
    }
    JustifTechniqueComponent.prototype.ngOnInit = function () {
        this.getJustif();
    };
    JustifTechniqueComponent.prototype.getJustif = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.justifservice.getJustifTechnique().subscribe(function (justif) {
            //console.log(justif);
            _this.data.customer = justif.customer;
            _this.data.data = justif.data;
            _this.data.estimation = justif.estimation;
            _this.data.irr = justif.irr;
            _this.data.irr_example = justif.irr_example;
            _this.data.npv = justif.npv;
            _this.data.npv_example = justif.npv_example;
            _this.data.overview = justif.overview;
            _this.data.planning = justif.planning;
            _this.data.planning.overview = justif.planning.overview;
            _this.data.ranking = justif.ranking;
            _this.data.roi = justif.roi;
            _this.data.roi_example = justif.roi_example;
            _this.data.story = justif.story;
            _this.data.vsm = justif.vsm;
        }, function (err) {
            console.log(err);
        });
    };
    return JustifTechniqueComponent;
}());
JustifTechniqueComponent = __decorate([
    core_1.Component({
        selector: 'my-justif-tech',
        templateUrl: 'app/justif/justif.technique.component.html'
    }),
    __metadata("design:paramtypes", [justif_service_1.JustifService])
], JustifTechniqueComponent);
exports.JustifTechniqueComponent = JustifTechniqueComponent;
//# sourceMappingURL=justif.technique.component.js.map