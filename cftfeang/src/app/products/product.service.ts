import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from "./product";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService {

    private _productUrl = 'http://localhost:4002/products';

    constructor(private _http: HttpClient) {}

    getProducts():Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
        .catch(this.handleError);
    }

    private handleError(err:HttpErrorResponse) {
        return Observable.throw(err.message);
    }
}