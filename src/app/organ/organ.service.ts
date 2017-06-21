import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import { risk_item } from '../model/risk';
import { dbUri } from '../config/config';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OrganService {
    // Resolve HTTP using the constructor
    constructor (private http: Http) {}
     
    // private instance variable to hold base url
    private commentsUrl = dbUri; 
     
    getOrganintro(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"org_intro", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getOrganroles(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"org_roles", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getOrganproject(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"org_project", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getOrganowner(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"org_owner", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getOrganMaster(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"org_master", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getOrganTeam(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"org_team", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getOrganPortfolio(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"org_portfolio", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getOrganSummary(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"org_sum", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getOrganVs(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"org_vs", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getOrganTheories(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"org_theories", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
}
