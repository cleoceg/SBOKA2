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
var phs_service_1 = require("./phs.service");
var PhsImplementComponent = (function () {
    function PhsImplementComponent(phsservice) {
        this.phsservice = phsservice;
        this.data = {
            processes: [{}],
            step: {}
        };
    }
    PhsImplementComponent.prototype.ngOnInit = function () {
        this.getPhs();
        //console.log(this.data);
    };
    PhsImplementComponent.prototype.getPhs = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.phsservice.getPhsImplement().subscribe(function (phs) {
            //console.log(phs);
            _this.data.processes = phs.processes;
            _this.data.step = phs.step;
        }, function (err) {
            console.log(err);
        });
    };
    return PhsImplementComponent;
}());
PhsImplementComponent = __decorate([
    core_1.Component({
        selector: 'my-phs-implement',
        templateUrl: 'app/phase/phs.implement.component.html'
    }),
    __metadata("design:paramtypes", [phs_service_1.PhsService])
], PhsImplementComponent);
exports.PhsImplementComponent = PhsImplementComponent;
//# sourceMappingURL=phs.implement.component.js.map