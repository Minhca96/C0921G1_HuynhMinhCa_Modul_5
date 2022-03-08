import {Employee} from "./employee";
import {Customer} from "./customer";
import {Service} from "./service";

export interface Contract {
  id:number;
  startDate: string;
  endDate:string;
  deposit:boolean;
  totalMoney: string;
  employeeId: Employee;
  customerId: Customer;
  serviceId:Service;
}
