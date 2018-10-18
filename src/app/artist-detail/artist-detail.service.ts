import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import {Observable} from 'rxjs/Observable';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ArtistDetailService {

  constructor(private http:Http) { }


  getArtistDetails(name:string): Observable<any> {
  	const url= 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+name +'&api_key=1514f551e71e2ebe34c098b945c259ca&format=json';
  	return this.http.get(url)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  getArtistTopTracks(name:string): Observable<any> {
  	const url= 'https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist='+name +'&api_key=1514f551e71e2ebe34c098b945c259ca&format=json';
  	return this.http.get(url)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  getArtistTopAlbums(name:string): Observable<any> {
  	const url= 'https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist='+name +'&api_key=1514f551e71e2ebe34c098b945c259ca&format=json';
  	return this.http.get(url)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}

