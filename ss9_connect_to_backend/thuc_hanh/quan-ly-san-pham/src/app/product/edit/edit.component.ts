import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ServiceService} from '../../service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../module/product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    formProduct: FormGroup;
    id: number;
    product: Product
  constructor(private productService: ServiceService,
              private activatedRoute: ActivatedRoute,
              private router:Router) {

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.productService.findById(this.id).subscribe(value =>{
      this.product = value;
      this.formProduct = new FormGroup({
        id: new FormControl(this.product.id),
        name: new FormControl(this.product.name),
        price: new FormControl(this.product.price),
        description: new FormControl(this.product.description)
      })
    })
  }

  edit(id: number) {
      this.product = this.formProduct.value
      this.productService.edit(id,this.product).subscribe();
      alert("edit product complete")
    this.router.navigate(['/product']);
    }
}
