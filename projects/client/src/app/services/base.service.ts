import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, catchError, retry, throwError } from "rxjs";
import { Result } from "../types";

export class BaseService<T> {
  url: string = "https://swapi.dev/api/";

  constructor(private httpClient: HttpClient, private endpoint: string) {}

  search(query: string) {
    // Short-circuit the search if the query is empty
    if (query.length === 0) return new BehaviorSubject<Result<T>>(new Result<T>()).asObservable();
    return this.httpClient
      .get<Result<T>>(`${this.url}/${this.endpoint}?search=${query}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getById(id: number) {
    return this.httpClient
      .get<Result<T>>(`${this.url}/${this.endpoint}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Status: ${error.status}, ` + `Message: ${error.message}`;
    }

    return throwError(() => errorMessage);
  }
}
