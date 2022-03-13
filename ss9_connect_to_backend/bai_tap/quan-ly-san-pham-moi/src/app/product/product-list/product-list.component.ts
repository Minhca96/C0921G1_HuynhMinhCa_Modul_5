import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../service/product-service.service';
import {Product} from '../../product';
import {Category} from '../../category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    productList : Product[];
    productObj : Product;

  constructor(private productService: ProductServiceService) {
    this.productObj = new class implements Product {
      id ?: number;
      categoryId ?: Category;
      name ?: string;
      price ?: number;
      production ?: string;
    }
  }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(value => {
      this.productList = value;
    })
  }

  findById(id: number) {
    this.productService.findByIdProduct(id).subscribe( value => {
      this.productObj = value ;
    })
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(value => {
    this.ngOnInit();
    })
  }
}
