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
var PrinCollabComponent = (function () {
    function PrinCollabComponent(prinservice) {
        this.prinservice = prinservice;
        this.data = {
            overview: {},
            benefits: {},
            distributed: {},
            importance: {},
            colocated: {}
        };
    }
    PrinCollabComponent.prototype.ngOnInit = function () {
        this.getPrin();
        //console.log(this.data);
    };
    PrinCollabComponent.prototype.getPrin = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.prinservice.getPrinCollab().subscribe(function (prin) {
            //console.log(prin);
            _this.data.overview = prin.overview;
            _this.data.benefits = prin.benefits;
            _this.data.distributed = prin.distributed;
            _this.data.importance = prin.importance;
            _this.data.colocated = prin.colocated;
        }, function (err) {
            console.log(err);
        });
    };
    return PrinCollabComponent;
}());
PrinCollabComponent = __decorate([
    core_1.Component({
        selector: 'my-prin-collab',
        templateUrl: 'app/principles/prin.collab.component.html'
    }),
    __metadata("design:paramtypes", [prin_service_1.PrinService])
], PrinCollabComponent);
exports.PrinCollabComponent = PrinCollabComponent;
//# sourceMappingURL=prin.collab.component.js.map