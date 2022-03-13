import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service.service';
import {Customer} from '../../interface/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
      customers: Customer[];
  constructor(private customerService: ServiceService) { }

  ngOnInit(): void {
    this.customerService.findAllCustomer().subscribe(value => {
      this.customers = value;
    });

  }

}
