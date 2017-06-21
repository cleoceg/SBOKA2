import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';
import { risk_item } from '../model/risk';
import { dbUri } from '../config/config';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PrinService {
    // Resolve HTTP using the constructor
    constructor (private http: Http) {}
     
    // private instance variable to hold base url
    private commentsUrl = dbUri; 
     
    getPrinintro(): Observable<risk_item> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"prin_intro", options)
            //.map((res:Response) => res.json())
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getPrinEpc(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"prin_epc", options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getPrinSelforg(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"prin_selforg", options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getPrinCollab(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"prin_collab", options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getPrinVb(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"prin_vb", options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getPrinTime(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"prin_timebox", options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getPrinIter(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"prin_iterative", options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }
    
    getPrinVs(): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        var res =  this.http.get(this.commentsUrl+"prin_vs", options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        return res;
    }

}
