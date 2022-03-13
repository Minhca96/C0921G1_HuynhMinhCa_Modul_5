import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../interface/customer';
import {ServiceService} from '../../../service/service.service';
import {CustomerType} from '../../../interface/customer-type';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerObj: Customer;
  customerList : Customer[] ;
  id: number;
  constructor(private customerService: ServiceService,
              ) {
    this.customerObj = new class implements Customer{
      id ?: number;
      customerType ?: CustomerType;
      name ?: string;
      birthDay ?: string;
      gender ?: string;
      card ?: string;
      phone ?: string;
      mail ?: string;
      address ?:string;
    }
  }

  ngOnInit(): void {
    this.customerService.findAllCustomer().subscribe(value => {
      this.customerList = value;
    });
  }

  findCustomerById(id: number) {
    this.customerService.findById(id).subscribe(
      value => {
        this.customerObj = value;
      }
    );
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(
      value => {
        this.ngOnInit()
      }
    );

  }
}
