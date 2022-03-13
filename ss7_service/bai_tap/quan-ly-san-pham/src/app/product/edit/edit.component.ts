import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productForm: FormGroup;
  id: number;

  constructor(private productService: ProductServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
    const product = this.getProduct(this.id)
    this.productForm = new FormGroup({
      id: new FormControl(product.id),
      name: new FormControl(product.name),
      price: new FormControl(product.price),
      description: new FormControl(product.description)
    })
  }

  ngOnInit(): void {



  }

   getProduct(id: number) {
    return this.productService.findById(id)
  }

   edit(id: number){
    const product = this.productForm.value;
    this.productService.updateProduct(id,product)
    alert("Edit complete")
    this.router.navigate(['/product'])
  }
}
