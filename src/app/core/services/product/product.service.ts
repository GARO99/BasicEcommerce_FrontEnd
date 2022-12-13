import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Product } from '@models/product/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAll(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${environment.urlAPI}/Product`);
  }

  public get(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${environment.urlAPI}/Product/${id}`);
  }

  public create(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(`${environment.urlAPI}/Product`, product);
  }

  public update(product: Product): Observable<Product>{
    return this.httpClient.put<Product>(`${environment.urlAPI}/Product`, product);
  }

  public delete(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${environment.urlAPI}/Product/${id}`);
  }
}
