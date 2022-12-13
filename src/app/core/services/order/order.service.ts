import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { OrderResponse } from '@models/order/orderResponse.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAll(): Observable<OrderResponse[]>{
    return this.httpClient.get<OrderResponse[]>(`${environment.urlAPI}/Order`);
  }

  public get(id: number): Observable<OrderResponse>{
    return this.httpClient.get<OrderResponse>(`${environment.urlAPI}/Order/${id}`);
  }

  public create(order: OrderResponse): Observable<OrderResponse>{
    return this.httpClient.post<OrderResponse>(`${environment.urlAPI}/Order`, order);
  }

  public update(order: OrderResponse): Observable<OrderResponse>{
    return this.httpClient.put<OrderResponse>(`${environment.urlAPI}/Order`, order);
  }

  public delete(id: number): Observable<OrderResponse>{
    return this.httpClient.delete<OrderResponse>(`${environment.urlAPI}/Order/${id}`);
  }
}
