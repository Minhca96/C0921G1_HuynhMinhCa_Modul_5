import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListCustomerComponent} from './model/customer/list-customer/list-customer.component';
import {HomeComponent} from './view/home/home.component';
import {DeleteCustomerComponent} from './model/customer/delete-customer/delete-customer.component';
import {CreateCustomerComponent} from './model/customer/create-customer/create-customer.component';
import {EditCustomerComponent} from './model/customer/edit-customer/edit-customer.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path: "customer",
    component: ListCustomerComponent
  },
  // {
  //   path: "customer/delete/:id",
  //   component: DeleteCustomerComponent
  // },
  {
    path: "customer/edit/:id",
    component: EditCustomerComponent
  },
  {
    path: "create",
    component: CreateCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
