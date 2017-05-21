import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import {Mentor} from "./mentor";
import * as _ from "lodash";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class MentorService {
    private mentorUrl = 'http://localhost:8080/mentors';

    constructor(private http: Http) {
    }

    create(mentor: Mentor): Observable<Mentor> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.mentorUrl, JSON.stringify(mentor), options)
            .map(res =>  {})
            .catch(this.handleError);
    }

    checkAllFieldsNotEmpty (mentor: Mentor): boolean{
        return _.isEmpty(mentor.firstName)
            || _.isEmpty(mentor.lastName)
            || _.isEmpty(mentor.email)
            || _.isEmpty(mentor.mainSkill)
            || _.isEmpty(mentor.level)
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
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