import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ServiceService} from '../../service.service';
import {Router} from '@angular/router';
import {Product} from '../../module/product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
    formProduct: FormGroup;
    product :Product
  constructor(private productService:ServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.formProduct = new FormGroup({
      id: new FormControl(""),
      name: new FormControl(""),
      price: new FormControl(""),
      description: new FormControl("")
    })
  }

  save() {
    this.product = this.formProduct.value;
    this.productService.save(this.product).subscribe();
  }
}
