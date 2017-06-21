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
var PrinIntroComponent = (function () {
    function PrinIntroComponent(prinservice) {
        this.prinservice = prinservice;
        this.gen = {
            id: '',
            title: '',
            comment: ['']
        };
    }
    PrinIntroComponent.prototype.ngOnInit = function () {
        this.getPrin();
    };
    PrinIntroComponent.prototype.getPrin = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.prinservice.getPrinintro().subscribe(function (prinintro) {
            _this.gen.id = prinintro.id;
            _this.gen.title = prinintro.title;
            _this.gen.comment = prinintro.comment;
        }, function (err) {
            console.log(err);
        });
    };
    return PrinIntroComponent;
}());
PrinIntroComponent = __decorate([
    core_1.Component({
        selector: 'my-prin-intro',
        templateUrl: 'app/principles/prin.intro.component.html'
    }),
    __metadata("design:paramtypes", [prin_service_1.PrinService])
], PrinIntroComponent);
exports.PrinIntroComponent = PrinIntroComponent;
//# sourceMappingURL=prin.intro.component.js.map