export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: {
    period: string;
    price: number;
  };
  fuel_type: FuelType;
  thumbnail: string;
  accessories: {
    type: AccessoryIconType;
    name: string;
  }[];
  photos: string[];
}

export type FuelType = "gasoline_motor" | "electric_motor" | "hybrid_motor";

export type AccessoryIconType =
  | FuelType
  | "speed"
  | "acceleration"
  | "turning_diameter"
  | "exchange"
  | "seats";
