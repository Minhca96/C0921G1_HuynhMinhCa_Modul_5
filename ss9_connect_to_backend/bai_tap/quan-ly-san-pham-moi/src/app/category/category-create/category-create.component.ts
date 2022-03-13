import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../../service/product-service.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../category';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
        formCategory: FormGroup;
  constructor(private categoryService: ProductServiceService,
              private router: Router) {
    this.formCategory = new FormGroup({
      id: new FormControl(""),
      name:  new FormControl("")
    })
  }

  ngOnInit(): void {
  }

  create(value: Category) {
    this.categoryService.createCategory(value).subscribe();
    this.router.navigate(['category']);
  }
}
