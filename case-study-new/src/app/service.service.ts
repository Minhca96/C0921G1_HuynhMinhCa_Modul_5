import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {findAll} from '@angular/compiler-cli/ngcc/src/utils';
import {Observable} from 'rxjs';
import {Customer} from './interface/customer';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
      API_URL_CUSTOMER = "http://localhost:3000/customerList";
      API_URL_EMPLOYEE = "";
      API_URL_CONTRACT = "";

  constructor(private httpClient: HttpClient) { }
  findAllCustomer():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.API_URL_CUSTOMER)
  }
}

