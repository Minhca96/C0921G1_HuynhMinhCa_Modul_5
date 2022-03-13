import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductServiceService} from '../../service/product-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl()
    })
  constructor(private productService: ProductServiceService
              ) { }

  ngOnInit(): void {
  }
  save(){
    const product = this.productForm.value;
    this.productService.saveProduct(product);
    this.productForm.reset();

  }

}
