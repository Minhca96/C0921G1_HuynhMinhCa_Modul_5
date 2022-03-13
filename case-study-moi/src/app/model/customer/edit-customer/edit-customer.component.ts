import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../service/service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerType} from '../../../interface/customer-type';
import {Customer} from '../../../interface/customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
      customer: Customer;
      formCustomer: FormGroup;
      id: number;
      customerTypeList: CustomerType[];
  constructor(private customerService: ServiceService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
     this.id = this.activatedRoute.snapshot.params.id;
     this.customerService.findById(this.id).subscribe(value => {
       this.customer = value ;
       this.formCustomer =  new FormGroup({
         id: new FormControl(this.customer.id),
         customerType: new FormControl(""),
         name: new FormControl(this.customer.name),
         birthDay: new FormControl(this.customer.birthDay),
         gender: new FormControl(this.customer.gender),
         card: new FormControl(this.customer.card),
         phone: new FormControl(this.customer.phone),
         mail: new FormControl(this.customer.mail),
         address: new FormControl(this.customer.address)
       })
     })
  }

  ngOnInit(): void {
     this.customerService.findAllCustomerType().subscribe(value => {
       this.customerTypeList = value;
     })
  }
  edit(){
    this.id = this.formCustomer.value.id;
    this.customer = this.formCustomer.value
    this.customerService.edit(this.id,this.customer).subscribe();
    this.router.navigate(["/customer"])
  }

}
