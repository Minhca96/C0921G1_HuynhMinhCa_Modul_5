import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../service/product-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
        categoryList = [];
  constructor(private productService: ProductServiceService) {
    this.productService.getAllCategory().subscribe(value => {
      this.categoryList = value;
    })
  }

  ngOnInit(): void {
  }

}
