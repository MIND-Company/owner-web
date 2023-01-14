import { IParking } from './parking.model';

export enum DayOfWeek {
  ALL = 'All',
  WEEKEND = 'Wkd',
  MONDAY = 'Mon',
  THUESDAY = 'Tue',
  WEDNESDAY = 'Wed',
  THURSDAY = 'Thu',
  FRIDAY = 'Fri',
  SATURDAY = 'Sat',
  SUNDAY = 'Sun',
}

export interface IPrice {
  dayOfWeek: DayOfWeek;
  freeTimeInMinutes: number;
  id: number;
  maxPricePerDay: null;
  parkId: number;
  pricePerHour: string;
}

export interface ICar {
  calculatedPrice: string | null;
  plate: string;
  checkoutTime: string | null;
  entryTime: string;
}

export interface IParkingDetailed extends IParking {
  placeCount: number;
  priceList: IPrice[];
  takenCount: number;
  cars: ICar[];
}
