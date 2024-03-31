import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { EMPTY, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  http = inject(HttpClient);
  router = inject(Router);
  private toast = inject(MessageService);

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handlError(error);
        return EMPTY;
      })
    );
  }

  post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(url, data).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handlError(error);
        return EMPTY;
      })
    );
  }

  put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(url, data).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handlError(error);
        return EMPTY;
      })
    );
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handlError(error);
        return EMPTY;
      })
    );
  }

  private handlError(err: HttpErrorResponse) {
    switch (err.status) {
      case 401:
        this.showError('Unauthorized', 1000);
        break;
      case 403:
        this.showError('Forbidden', 1000);
        break;
      case 404:
        this.showError('Not found', 1000);
        break;
      case 400:
        this.showError('Bad request', 1000);
        break;
      case 500:
        this.showError('Internal server error', 1000);
        break;
      default:
        this.showError('Unknown error', 1000);
    }

    this.router.navigate(['/']);
  }

  private showError(message: string, duration = 1000) {
    this.toast.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: duration,
    });
  }
}
