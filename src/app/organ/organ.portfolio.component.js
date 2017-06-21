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
var OrganPortfolioComponent = (function () {
    function OrganPortfolioComponent(organservice) {
        this.organservice = organservice;
        this.data = {
            data: {},
            definition: {},
            examples: [{}],
            folios: {},
            involvment: {},
            managing: {},
            portfolio: {},
            programs: {},
            project: {},
            sos: {},
            working: {}
        };
    }
    OrganPortfolioComponent.prototype.ngOnInit = function () {
        this.getOrgan();
    };
    OrganPortfolioComponent.prototype.getOrgan = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.organservice.getOrganPortfolio().subscribe(function (org) {
            //console.log(org);
            _this.data.data = org.data;
            _this.data.definition = org.definition;
            _this.data.examples = org.examples;
            _this.data.folios = org.folios;
            _this.data.involvment = org.involvment;
            _this.data.managing = org.managing;
            _this.data.portfolio = org.portfolio;
            _this.data.programs = org.programs;
            _this.data.project = org.project;
            _this.data.sos = org.sos;
            _this.data.working = org.working;
        }, function (err) {
            console.log(err);
        });
    };
    return OrganPortfolioComponent;
}());
OrganPortfolioComponent = __decorate([
    core_1.Component({
        selector: 'my-organ-portfolio',
        templateUrl: 'app/organ/organ.portfolio.component.html'
    }),
    __metadata("design:paramtypes", [organ_service_1.OrganService])
], OrganPortfolioComponent);
exports.OrganPortfolioComponent = OrganPortfolioComponent;
//# sourceMappingURL=organ.portfolio.component.js.map