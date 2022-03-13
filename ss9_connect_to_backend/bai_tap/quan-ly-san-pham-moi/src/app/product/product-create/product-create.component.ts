import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../service/product-service.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
      formProduct: FormGroup;
      categoryList = [];
  constructor(private productService: ProductServiceService,
              private router: Router) {
    this.formProduct = new FormGroup({
      id: new FormControl(""),
      categoryId: new FormControl(""),
      name: new FormControl(""),
      price: new FormControl(""),
      production: new FormControl(""),
    })
  }

  ngOnInit(): void {
    this.productService.getAllCategory().subscribe(value => {
      this.categoryList = value
    })
  }

  create(value: Product) {
    this.productService.addProduct(value).subscribe();
    this.router.navigate([""])
  }
}
