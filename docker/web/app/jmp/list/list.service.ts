import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Mentor} from "../mentor/mentor";

@Injectable()
export class ListService {
    private mentorUrl = 'http://localhost:8080/mentors';

    constructor(private http: Http) {
    }

    getMentors(): Observable<Mentor[]> {
        return this.http.get(this.mentorUrl)
            .map(res=> res.json() || { })
            .catch(this.handleError);
    }

    private handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}