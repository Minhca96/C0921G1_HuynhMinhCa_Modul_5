import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerTypeComponent } from './customer-type/customer-type.component';
import { ContractComponent } from './contract/contract.component';
import { ServiceComponent } from './service/service.component';
import { EducationComponent } from './education/education.component';
import { PositionComponent } from './position/position.component';
import { EscortServiceComponent } from './escort-service/escort-service.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CustomerComponent,
    CustomerTypeComponent,
    ContractComponent,
    ServiceComponent,
    EducationComponent,
    PositionComponent,
    EscortServiceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
