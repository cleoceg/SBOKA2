import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import { risk_item } from '../model/risk';
import { dbUri } from '../config/config';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class QualityService {
    // Resolve HTTP using the constructor
    constructor (private http: Http) {}
     
    // private instance variable to hold base url
    private commentsUrl = dbUri; 
     
    getQualIntro(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"qual_intro", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
   
    getQualRole(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"qual_roles", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getQualDefined(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"qual_defined", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getQualAccept(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"qual_acceptance", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getQualMgt(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"qual_management", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getQualSummary(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"qual_summary", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getQualVs(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"qual_vs", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
}
