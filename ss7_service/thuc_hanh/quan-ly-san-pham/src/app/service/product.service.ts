import { Injectable } from '@angular/core';
import {Product} from '../module/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: ' iphone X',
      price: 10000000,
      description: 'new'
    },
    {
      id: 2,
      name: 'iphone 11',
      price: 12000000,
      description: 'new'
    },
    {
      id: 3,
      name: 'iphone 12',
      price: 20000000,
      description: 'new'
    }
  ];

  constructor() { }
  getAll(){
    return this.products;
  }
  saveProduct(product) {
    this.products.push(product);
  }
}
