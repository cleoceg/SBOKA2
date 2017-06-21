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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var config_1 = require("../config/config");
// Import RxJs required methods
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var QualityService = (function () {
    // Resolve HTTP using the constructor
    function QualityService(http) {
        this.http = http;
        // private instance variable to hold base url
        this.commentsUrl = config_1.dbUri;
    }
    QualityService.prototype.getQualIntro = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var res = this.http.get(this.commentsUrl + "qual_intro", options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        return res;
    };
    QualityService.prototype.getQualRole = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var res = this.http.get(this.commentsUrl + "qual_roles", options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        return res;
    };
    QualityService.prototype.getQualDefined = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var res = this.http.get(this.commentsUrl + "qual_defined", options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        return res;
    };
    QualityService.prototype.getQualAccept = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var res = this.http.get(this.commentsUrl + "qual_acceptance", options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        return res;
    };
    QualityService.prototype.getQualMgt = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var res = this.http.get(this.commentsUrl + "qual_management", options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        return res;
    };
    QualityService.prototype.getQualSummary = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var res = this.http.get(this.commentsUrl + "qual_summary", options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        return res;
    };
    QualityService.prototype.getQualVs = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var res = this.http.get(this.commentsUrl + "qual_vs", options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        return res;
    };
    return QualityService;
}());
QualityService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], QualityService);
exports.QualityService = QualityService;
//# sourceMappingURL=quality.service.js.map