import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor() { }

  public showErrorMessage(message: string): void {
    Swal.fire({
      title: '¡A ocurriedo un error!',
      icon: 'error',
      html: message,
      customClass: {
        confirmButton: 'btn-sign-in mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base mr-1',
      },
      buttonsStyling: false,
      allowOutsideClick: false
    });
  }
}
