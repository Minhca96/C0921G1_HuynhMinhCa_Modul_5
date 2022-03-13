import { Injectable } from '@angular/core';
import {Customer} from '../interface/customer';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CustomerType} from '../interface/customer-type';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  API_URL_CUSTOMER = "http://localhost:3000/customerList";
  API_URL_EMPLOYEE = "";
  API_URL_CONTRACT = "";
  API_URL_CUSTOMER_TYPE = "http://localhost:3000/customerType";

  constructor(private httpClient: HttpClient) { }
  // customer
  findAllCustomer():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.API_URL_CUSTOMER )
  }
  deleteCustomer(id: number):Observable<Customer>{
    return this.httpClient.delete<Customer>(this.API_URL_CUSTOMER +"/"+ id)
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL_CUSTOMER+"/"+ id)
  }
  createCustomer(customer: Customer):Observable<Customer>{
    return  this.httpClient.post<Customer>(this.API_URL_CUSTOMER, customer)
  }

  findAllCustomerType():Observable<CustomerType[]>{
    return  this.httpClient.get<CustomerType[]>(this.API_URL_CUSTOMER_TYPE)
  }
  edit(id: number, customer: Customer): Observable<Customer>{
    return  this.httpClient.patch<Customer>(this.API_URL_CUSTOMER + "/" + id, customer)
  }
}
