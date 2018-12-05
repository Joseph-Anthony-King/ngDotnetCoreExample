import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IEvent } from './event';

@Injectable({
    providedIn: 'root'
})
export class EventsService {

    private eventsUrl: string = 'http://localhost:5000/api/events';

    constructor(private http: HttpClient) { }

    getEvents(): Observable<IEvent[]> {
        return this.http.get<IEvent[]>(this.eventsUrl).pipe(
            tap(data => console.log('Values from the EventsController: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getEvent(id: number): Observable<IEvent | undefined>{
        return this.getEvents().pipe(
            map((events: IEvent[]) => events.find(ev => ev.appEventId === id))
        );
    }

    deleteEvent(id: number): Observable<IEvent | undefined>{
        return this.http.delete<IEvent>(this.eventsUrl + '/' + id);
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
