import {Injectable} from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {TweetText} from './tweet-text';
import { Subject, from, throwError, Observable } from  'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as socketio from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class TweetTextService {

  private baseUrl =  environment.api_base_url;
  constructor(private http: HttpClient) { }

  getInitialTweetTextStatus(): Observable<TweetText> {
    return this.http.get<TweetText>(`${this.baseUrl}/api/tweet_text`);
  }

  getUpdates() {
    let socket = socketio(this.baseUrl);
    let tweettextSub = new Subject<TweetText>();
    let tweettextSubObservable = from(tweettextSub);
    socket.on('tweet_text', (fullTweet) => {
      let tweettextStatus = new TweetText(fullTweet);
      tweettextSub.next(tweettextStatus);
    });

    return tweettextSubObservable;
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}