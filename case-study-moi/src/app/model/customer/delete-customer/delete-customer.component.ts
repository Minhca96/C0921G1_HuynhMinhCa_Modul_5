import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../service/service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Customer} from '../../../interface/customer';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
    formCustomer: FormGroup;
    id: number;
    customer: Customer;
  constructor(private customerService: ServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.customerService.findById(this.id).subscribe(value => {
      this.customer = value;
      this.formCustomer = new FormGroup({
        id: new FormControl(this.customer.id),
        customerType: new FormControl(this.customer.customerType.name),
        name: new FormControl(this.customer.name),
        birthDay: new FormControl(this.customer.birthDay),
        gender: new FormControl(this.customer.gender),
        card: new FormControl(this.customer.card),
        phone: new FormControl(this.customer.phone),
        mail: new FormControl(this.customer.mail),
        address: new FormControl(this.customer.address),
      })
    })
  }
  delete(){
    this.id = this.formCustomer.value.id;
    this.customerService.deleteCustomer(this.id).subscribe(() =>{
      alert("delete customer complete");
      this.router.navigateByUrl("/customer");
    });

  }

}
