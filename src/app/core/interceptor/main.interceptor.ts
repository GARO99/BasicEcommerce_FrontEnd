import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, retry, switchMap } from 'rxjs';
import { TokenService } from '@core/services/token/token.service';
import { ErrorhandlerService } from '@core/services/handlers/error/errorhandler.service';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  constructor(
    private tokenService : TokenService,
    private errorHandler: ErrorhandlerService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addDefultHeaders(request);
    request = this.addAuthToken(request);
    return next.handle(request).pipe(
      retry({count:3, delay: 500}),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return this.tokenService.setToken().pipe(
            switchMap(() => {
              request = this.addAuthToken(request);
              return next.handle(request).pipe(
                catchError(err => this.errorHandler.handleError(err)))
            })
          )
        }
        return this.errorHandler.handleError(error);
      }))
  }

  private addDefultHeaders(request: HttpRequest<any>): HttpRequest<any>{
    return request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  private addAuthToken(request: HttpRequest<any>): HttpRequest<any>{
    let token = this.tokenService.getToken();
    if (token) {
      return request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      });
    }

    return request;    
  }
}
