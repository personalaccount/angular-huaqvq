import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { CasesComponent } from './cases/cases.component';
import { Statistic } from './statistic';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = '/api/';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // Inject the `HttpClient` module to the constructor.
  constructor(private http: HttpClient) {}

  // Add the error handler function that returns as an Observable.

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getCases(): Observable<CasesComponent[]> {
    return this.http.get<CasesComponent[]>(`${apiUrl}`).pipe(
      tap(cases => console.log('fetched cases')),
      catchError(this.handleError('getCases', []))
    );
  }

  getCasesById(id: string): Observable<CasesComponent> {
    const url = `${apiUrl}/${id}`;

    return this.http.get<CasesComponent>(url).pipe(
      tap(_ => console.log(`fetched cases id=${id}`)),
      catchError(this.handleError<CasesComponent>(`getCasesById id=${id}`))
    );
  }

  addCases(cases: CasesComponent): Observable<CasesComponent> {
    return this.http.post<CasesComponent>(apiUrl, cases, httpOptions).pipe(
      tap((c: CasesComponent) => console.log(`added cases w/ id=${c.getCaseId()}`)),
      catchError(this.handleError<CasesComponent>('addCases'))
    );
  }

  updateCases(id: string, cases: CasesComponent): Observable<any> {
    const url = `${apiUrl}/${id}`;

    return this.http.put(url, cases, httpOptions).pipe(
      tap(_ => console.log(`updated cases id=${id}`)),
      catchError(this.handleError<any>('updateCases'))
    );
  }

}
