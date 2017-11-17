import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import {Observable} from 'rxjs/Observable';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ArtistListService {

  constructor(private http:Http) { }


  getArtistList(): Observable<any> {
  	return this.http.get('https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=1514f551e71e2ebe34c098b945c259ca&format=json')
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }


}
