import {CustomerType} from "./customer-type";

export interface Customer {
  id : number;
  customerType: CustomerType;
  name : string;
  birthDay: string;
  gender: string;
  card: string;
  phone : string;
  mail: string;
  address :string;
}
