export interface IGetParkingResponseDto {
  description: string;
  place_count: number;
  address: string;
  web_address: string;
  taken: number;
  cars: {
    calculated_price: string | null;
    car: string;
    checkout_time_utc: string | null;
    entry_time_utc: string;
  }[];
  id: number;
  latitude: string;
  longitude: string;
  price_list: {
    day_of_week: string;
    price_per_hour: string;
    max_price_per_day: number;
    free_time_in_minutes: number;
    id: number;
    park_id: number;
  }[];
}
