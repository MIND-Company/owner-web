import { IGetParkingResponseDto } from '../dto/get-parking-response.dto';
import {
  DayOfWeek,
  IParkingDetailed,
  IPrice,
} from '../models/parking-detailed.model';

export const toParkingDetailedMapper = (
  dto: IGetParkingResponseDto,
): IParkingDetailed => {
  return {
    id: dto.id,
    name: dto.description,
    address: dto.address,
    coords: { lat: parseFloat(dto.latitude), long: parseFloat(dto.longitude) },
    placeCount: dto.place_count,
    priceList: dto.price_list.map((el) => {
      return {
        dayOfWeek: el.day_of_week as DayOfWeek,
        freeTimeInMinutes: el.free_time_in_minutes,
        id: el.id,
        maxPricePerDay: null,
        parkId: el.park_id,
        pricePerHour: el.price_per_hour,
      };
    }),
    takenCount: dto.taken,
    cars: dto.cars.map((car) => {
      return {
        calculatedPrice: car.calculated_price,
        plate: car.car,
        checkoutTime: car.checkout_time_utc,
        entryTime: car.entry_time_utc,
      };
    }),
  };
};
