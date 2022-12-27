import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { sha256 } from 'js-sha256';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  public setToken(): Observable<string> {
    return this.httpClient.post<string>(`${environment.urlAPI}/Auth/token`,
    {
      userName: environment.userApi.userName,
      password: sha256(environment.userApi.password)
    },{
      responseType: 'text' as 'json',
    }).pipe(
      tap((r: string) =>  localStorage.setItem('basicEcommerce.token', r)));
  }

  public getToken(): string | null {
    return localStorage.getItem('basicEcommerce.token');
  }
}
