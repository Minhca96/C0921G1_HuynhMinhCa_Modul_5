import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../service/product-service.service';
import {Iproduct} from '../../model/iproduct';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private productService: ProductServiceService) { }
    products: Iproduct[] = [];
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.products = this.productService.findAll();
  }

}
