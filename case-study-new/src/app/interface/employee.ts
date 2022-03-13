import {Education} from './education';

export interface Employee {
  id ?: number
  name ?: string;
  birthDate ?:string;
  card ?: string;
  salary ?: string;
  phone ?: string;
  mail ?:string;
  address ?: string;
  positionId ?: Position;
  educationId ?: Education;
}
