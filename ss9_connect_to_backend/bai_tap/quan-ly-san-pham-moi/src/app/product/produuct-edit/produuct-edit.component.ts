import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../product';
import {Category} from '../../category';

@Component({
  selector: 'app-produuct-edit',
  templateUrl: './produuct-edit.component.html',
  styleUrls: ['./produuct-edit.component.css']
})
export class ProduuctEditComponent implements OnInit {
      formProduct: FormGroup;
      id:  number;
      product: Product;
      categoryList = [];
  constructor(private productService: ProductServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.productService.findByIdProduct(this.id).subscribe(value => {
      this.product = value ;
      this.formProduct = new FormGroup({
        id: new FormControl(this.product.id),
        categoryId: new FormControl(""),
        name: new FormControl(this.product.name),
        price: new FormControl(this.product.price),
        production: new FormControl(this.product.production),
      })
    })


  }

  ngOnInit(): void {
    this.productService.getAllCategory().subscribe(value => {
      this.categoryList = value;
    })
  }


  edit(id: number, value: Product) {
    this.productService.editProduct(id,value).subscribe(value1 => {
      this.router.navigateByUrl("")
    })
  }
}
