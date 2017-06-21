import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import { risk_item } from '../model/risk';
import { dbUri } from '../config/config';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ChangeService {
    // Resolve HTTP using the constructor
    constructor (private http: Http) {}
     
    // private instance variable to hold base url
    private commentsUrl = dbUri; 
     
    getChangeIntro(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"chg_intro", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getChangeRoles(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"chg_roles", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getChangeOverview(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"chg_overview", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getChangeChange(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"chg_change", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getChangeInteg(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"chg_integration", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getChangePortfolio(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"chg_portfolio", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getChangeSummary(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"chg_summary", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getChangeVs(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"chg_vs", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
}
