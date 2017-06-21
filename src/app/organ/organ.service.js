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
var OrganService = (function () {
    // Resolve HTTP using the constructor
    function OrganService(http) {
        this.http = http;
        // private instance variable to hold base url
        this.commentsUrl = config_1.dbUri;
    }
    OrganService.prototype.getOrganintro = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var res = this.http.get(this.commentsUrl + "org_intro", options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        return res;
    };
    OrganService.prototype.getOrganroles = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var res = this.http.get(this.commentsUrl + "org_roles", options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        return res;
    };
    OrganService.prototype.getOrganproject = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var res = this.http.get(this.commentsUrl + "org_project", options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        return res;
    };
    OrganService.prototype.getOrganowner = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var res = this.http.get(this.commentsUrl + "org_owner", options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        return res;
    };
    OrganService.prototype.getOrganMaster = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var res = this.http.get(this.commentsUrl + "org_master", options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        return res;
    };
    OrganService.prototype.getOrganTeam = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var res = this.http.get(this.commentsUrl + "org_team", options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        return res;
    };
    OrganService.prototype.getOrganPortfolio = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var res = this.http.get(this.commentsUrl + "org_portfolio", options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        return res;
    };
    OrganService.prototype.getOrganSummary = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var res = this.http.get(this.commentsUrl + "org_sum", options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        return res;
    };
    OrganService.prototype.getOrganVs = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var res = this.http.get(this.commentsUrl + "org_vs", options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        return res;
    };
    OrganService.prototype.getOrganTheories = function () {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        var res = this.http.get(this.commentsUrl + "org_theories", options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
        return res;
    };
    return OrganService;
}());
OrganService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], OrganService);
exports.OrganService = OrganService;
//# sourceMappingURL=organ.service.js.map