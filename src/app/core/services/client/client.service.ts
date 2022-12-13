import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { ClientResponse } from '@models/client/clientResponse.model';
import { ClientRequest } from '@models/client/clientResquest.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAll() : Observable<ClientResponse[]> {
    return this.httpClient.get<ClientResponse[]>(`${environment.urlAPI}/Clients`);
  }

  public get(id: number) : Observable<ClientResponse> {
    return this.httpClient.get<ClientResponse>(`${environment.urlAPI}/Clients/${id}`);
  }

  public create(client: ClientRequest) : Observable<ClientResponse> {
    return this.httpClient.post<ClientResponse>(`${environment.urlAPI}/Clients`, client);
  }
  
  public update(client: ClientRequest) : Observable<ClientResponse> {
    return this.httpClient.put<ClientResponse>(`${environment.urlAPI}/Clients`, client);
  }

  public delete(id: number) : Observable<ClientResponse> {
    return this.httpClient.delete<ClientResponse>(`${environment.urlAPI}/Clients/${id}`);
  }
}
