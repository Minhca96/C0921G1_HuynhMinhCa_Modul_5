import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../module/product';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
        productForm: FormGroup;
        id: number;
        product: Product;
  constructor(private productService: ServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
          this.id = this.activatedRoute.snapshot.params.id;
          this.productService.findById(this.id).subscribe(
       data=>{
        this.product = data;

         this.productForm = new FormGroup({
           id: new FormControl(this.product.id),
           name: new FormControl(this.product.name),
           price: new FormControl(this.product.price),
           description: new FormControl(this.product.description)
         })
       }
     )

  }
  delete(id: number){
    this.productService.deleteProduct(id).subscribe();
    this.router.navigate(['/product']);
  }

}
