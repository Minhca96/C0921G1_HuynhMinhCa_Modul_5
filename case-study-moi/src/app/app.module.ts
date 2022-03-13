import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCustomerComponent } from './model/customer/list-customer/list-customer.component';
import { DeleteCustomerComponent } from './model/customer/delete-customer/delete-customer.component';
import {HomeComponent} from './view/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateCustomerComponent } from './model/customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './model/customer/edit-customer/edit-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    ListCustomerComponent,
    DeleteCustomerComponent,
    HomeComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
