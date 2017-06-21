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
var router_1 = require("@angular/router");
var PhsProcessusComponent = (function () {
    function PhsProcessusComponent(phsservice, route) {
        this.phsservice = phsservice;
        this.route = route;
        this.data = {
            input: [{}],
            output: [{}],
            tools: [{}],
            processus: {}
        };
    }
    PhsProcessusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id']; // 
            _this.getPhs();
            //console.log(this.data);
        });
    };
    PhsProcessusComponent.prototype.getPhs = function () {
        var _this = this;
        //console.log("debut getPrin");
        this.phsservice.getPhsProcesus(this.id).subscribe(function (phs) {
            //console.log(phs);
            _this.data.input = phs.input;
            _this.data.output = phs.output;
            _this.data.tools = phs.tools;
            _this.data.processus = phs.processus;
        }, function (err) {
            console.log(err);
        });
    };
    return PhsProcessusComponent;
}());
PhsProcessusComponent = __decorate([
    core_1.Component({
        selector: 'my-phs-processus',
        templateUrl: 'app/phase/phs.processus.component.html'
    }),
    __metadata("design:paramtypes", [phs_service_1.PhsService,
        router_1.ActivatedRoute])
], PhsProcessusComponent);
exports.PhsProcessusComponent = PhsProcessusComponent;
//# sourceMappingURL=phs.processus.component.js.map