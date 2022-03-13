import {Service} from './service';
import {Customer} from './customer';
import {Employee} from './employee';

export interface Contract {
  id ?:number;
  startDate ?: string;
  endDate ?:string;
  deposit ?:boolean;
  totalMoney ?: string;
  employeeId ?: Employee;
  customerId ?: Customer;
  serviceId ?:Service;
}
