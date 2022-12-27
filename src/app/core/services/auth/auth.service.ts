import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { UserRequest } from '@models/auth/userRequest.model';
import { UserResponse } from '@models/auth/userResponse.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  public singIn(userrequest: UserRequest): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(`${environment.urlAPI}/User/login`, userrequest);
  }
}
