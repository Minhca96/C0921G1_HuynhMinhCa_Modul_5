import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../service/product-service.service';
import {ActivatedRoute, ParamMap, Route, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  productForm: FormGroup;
  id: number;

  constructor(private productService: ProductServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   this.id = +paramMap.get('id');
    //   const product = this.getProduct(this.id);
    //   this.productForm = new FormGroup({
    //     id: new FormControl(product.id),
    //     name: new FormControl(product.name),
    //     price: new FormControl(product.price),
    //     description: new FormControl(product.description)
    //   })
    // })x

    this.id = this.activatedRoute.snapshot.params.id;

    const product = this.getProduct(this.id);

      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      })

  }
  getProduct(id: number) {
    return this.productService.findById(id);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);

    this.router.navigate(['/product']);
  }

}
