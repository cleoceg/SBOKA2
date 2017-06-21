import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import { risk_item } from '../model/risk';
import { dbUri } from '../config/config';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PhsService {
    // Resolve HTTP using the constructor
    constructor (private http: Http) {}
     
    // private instance variable to hold base url
    private commentsUrl = dbUri; 
     
    getPhsPhases(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"phs_phases", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getPhsInitiate(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"phs_initiate", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getPhsProcesus(id: string): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"proc/"+id, options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getPhsPlan(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"phs_plan", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getPhsImplement(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"phs_implement", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getPhsReview(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"phs_review", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getPhsRelease(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"phs_release", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
}
