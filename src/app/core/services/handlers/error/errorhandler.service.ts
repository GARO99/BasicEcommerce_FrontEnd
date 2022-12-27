import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from '@core/services/alert/alert.service';
import { TokenService } from '@core/services/token/token.service';
import { ErrorFromServer } from '@models/error/errorfromserver.model';
import { throwError, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {
  constructor(
    private tokenService : TokenService,
    private alertService: AlertService
  ) { }

  public handleError(error: HttpErrorResponse) {
    let errorMessage = '';    
    let errorFromServer: ErrorFromServer = JSON.parse(JSON.stringify(error.error));
    if (error.status != 401) {
      errorMessage = `<b>Error</b><br>
      <b>Status code</b>: ${error.status}.<br>
      <b>Message</b>: ${errorFromServer.message}.<br>
      <b>Details</b>: ${errorFromServer.details}.<br>`;
      this.alertService.showErrorMessage(errorMessage);
    }
    return throwError(() => errorMessage);
  }
}
