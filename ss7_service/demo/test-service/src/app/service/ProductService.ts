import {Product} from '../model/Product';

export class ProductService {
  public getProducts(){
    let products: Product[];
    products = [
      new Product(1, 'chuoi chien' , '10000'),
      new Product(2, 'banh xoai' , '10000'),
      new Product(3, 'oi' , '10000'),
      new Product(4, 'che' , '10000'),
    ];
    return products;
  }

}
