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
var prin_service_1 = require("./prin.service");
var PrinEpcComponent = (function () {
    function PrinEpcComponent(prinservice) {
        this.prinservice = prinservice;
        this.data = {
            epc: {},
            Adaptation: {
                part1: {},
                part2: {}
            },
            Inspection: {},
            Transparency: {}
        };
    }
    PrinEpcComponent.prototype.ngOnInit = function () {
        this.getPrin();
        //console.log(this.data);
    };
    PrinEpcComponent.prototype.getPrin = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.prinservice.getPrinEpc().subscribe(function (prinEpc) {
            //console.log(prinEpc);
            _this.data.epc = prinEpc.epc;
            _this.data.Adaptation = prinEpc.Adaptation;
            _this.data.Inspection = prinEpc.Inspection;
            _this.data.Transparency = prinEpc.Transparency;
        }, function (err) {
            console.log(err);
        });
    };
    return PrinEpcComponent;
}());
PrinEpcComponent = __decorate([
    core_1.Component({
        selector: 'my-prin-epc',
        templateUrl: 'app/principles/prin.epc.component.html'
    }),
    __metadata("design:paramtypes", [prin_service_1.PrinService])
], PrinEpcComponent);
exports.PrinEpcComponent = PrinEpcComponent;
//# sourceMappingURL=prin.epc.component.js.map