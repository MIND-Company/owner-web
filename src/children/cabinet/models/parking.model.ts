export interface IParking {
  id: number;
  name: string;
  address: string;
  coords: { lat: number; long: number };
}

export const parkingModel = (
  id: number,
  name: string,
  coords: { lat: number; long: number },
  address: string,
): IParking => {
  return {
    id,
    name,
    coords,
    address,
  };
};
