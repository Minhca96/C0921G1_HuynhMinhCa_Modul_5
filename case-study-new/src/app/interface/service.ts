import {EscortService} from './escort-service';

export interface Service {
  id?: number;
  nam?: string;
  area?: string;
  cost?: string;
  maxPeople?: number;
  escortServiceId?: EscortService;
  standRoom?: string;
  poolArea?: string;
  numberOfFloors?: number;
}
