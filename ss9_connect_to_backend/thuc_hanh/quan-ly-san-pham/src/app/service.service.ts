import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './module/product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  API_URL = "http://localhost:3000/productList"
  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Product[]>{
    return  this.httpClient.get<Product[]>(this.API_URL )
  }

  deleteProduct(): Observable<Product> {
    return this.httpClient.delete<Product>(this.API_URL);
  }

  findById(id:number): Observable<Product>{
    return this.httpClient.get(this.API_URL+"/" + id)
  }
  edit(id: number,product: Product): Observable<Product>{
    return this.httpClient.patch(this.API_URL+ "/" + id,product)
  }


  save(product: Product): Observable<Product> {
    return this.httpClient.post(this.API_URL,product)
  }
}
