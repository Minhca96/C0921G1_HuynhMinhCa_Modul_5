import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomerComponent } from './model/customer/customer.component';
import { CustomerTypeComponent } from './model/customer-type/customer-type.component';
import { EmployeeComponent } from './model/employee/employee.component';
import { ContractComponent } from './model/contract/contract.component';
import { EducationComponent } from './model/education/education.component';
import { ServiceComponent } from './model/service/service.component';
import { EscortServiceComponent } from './model/escort-service/escort-service.component';
import { HomeComponent } from './view/home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerTypeComponent,
    EmployeeComponent,
    ContractComponent,
    EducationComponent,
    ServiceComponent,
    EscortServiceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
