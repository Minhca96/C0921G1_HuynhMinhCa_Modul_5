import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../product';
import {Category} from '../category';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
    API_URL_PRODUCT = " http://localhost:3000/productList";
    API_URL_CATEGORY = " http://localhost:3000/categoryList";
  constructor(private httpClient: HttpClient) { }

  getAllProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.API_URL_PRODUCT)
  }
  findByIdProduct(id: number):Observable<Product>{
    return  this.httpClient.get<Product>(this.API_URL_PRODUCT + "/" + id)
  }
  deleteProduct(id: number):Observable<Product>{
    return  this.httpClient.delete<Product>(this.API_URL_PRODUCT + "/" +id)
  }

  editProduct(id: number, product: Product):Observable<Product>{
    return  this.httpClient.patch<Product>(this.API_URL_PRODUCT + "/" + id, product)
  }
  addProduct(product: Product):Observable<Product>{
    return this.httpClient.post<Product>(this.API_URL_PRODUCT, product)
  }

  // category
  getAllCategory():Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.API_URL_CATEGORY)
  }
  createCategory(category: Category):Observable<Category>{
    return this.httpClient.post(this.API_URL_CATEGORY,category)
  }

}
