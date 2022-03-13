import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../service/service.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../../interface/customer';
import {ValidateUtils} from '../../../validate-utils';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  validateUtils = new ValidateUtils();
    formCustomer: FormGroup = new FormGroup({
      id: new FormControl(""),
      customerType: new FormControl(""),
      name: new FormControl("",[Validators.required,Validators.pattern('[A-Za-z ]+')]),
      birthDay: new FormControl("",[Validators.required,this.validateUtils.check18]),
      gender: new FormControl("",[Validators.required]),
      card: new FormControl("",[Validators.required]),
      phone: new FormControl("",[Validators.required,Validators.pattern('^(090\d{7})|(091\d{7})|(8490\d{7})|(8491\d{7})|(082\d{7})$')]),
      mail: new FormControl("",[Validators.email]),
      address: new FormControl("",[Validators.required])
    });

    customer: Customer;
  customerTypeList = [];
  constructor(private customerService: ServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.customerService.findAllCustomerType().subscribe(value => {
      this.customerTypeList = value;
    })


  }
  create(){
      this.customer = this.formCustomer.value;
      this.customerService.createCustomer(this.customer).subscribe(()=>{
        this.router.navigateByUrl("/customer")
      });
      console.log(this.customer)
  }

}
