import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service.service';
import {Product} from '../../module/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private productService: ServiceService) { }
    productList: Product[];

  ngOnInit(): void {
    this.productService.findAll().subscribe(value => {
      this.productList = value
    })
  }



}
