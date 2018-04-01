import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from './user';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class UserService {
    private _usersUrl = 'http://localhost:4002/users';

    constructor(private _http:HttpClient) {}

    getUsers():Observable<IUser[]> {
        return this._http.get<IUser[]>(this._usersUrl).catch(this.handleError);
    }

    private handleError(err:HttpErrorResponse) {
        return Observable.throw(err.message);
    }
}