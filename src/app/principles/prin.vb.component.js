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
var PrinVbComponent = (function () {
    function PrinVbComponent(prinservice) {
        this.prinservice = prinservice;
        this.data = {
            id: '',
            title: '',
            overview: {},
            comment: ['']
        };
    }
    PrinVbComponent.prototype.ngOnInit = function () {
        this.getPrin();
        //console.log(this.data);
    };
    PrinVbComponent.prototype.getPrin = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.prinservice.getPrinVb().subscribe(function (prin) {
            //console.log(prin);
            _this.data.overview = prin.overview;
            _this.data.id = prin.id;
            _this.data.title = prin.title;
            _this.data.comment = prin.comment;
        }, function (err) {
            console.log(err);
        });
    };
    return PrinVbComponent;
}());
PrinVbComponent = __decorate([
    core_1.Component({
        selector: 'my-prin-vb',
        templateUrl: 'app/principles/prin.vb.component.html'
    }),
    __metadata("design:paramtypes", [prin_service_1.PrinService])
], PrinVbComponent);
exports.PrinVbComponent = PrinVbComponent;
//# sourceMappingURL=prin.vb.component.js.map