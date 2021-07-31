import CarSvg from "../assets/car.svg";
import SpeedSvg from "../assets/speed.svg";
import ForceSvg from "../assets/force.svg";
import PeopleSvg from "../assets/people.svg";
import EnergySvg from "../assets/energy.svg";
import HybridSvg from "../assets/hybrid.svg";
import GasolineSvg from "../assets/gasoline.svg";
import ExchangeSvg from "../assets/exchange.svg";
import AccelerationSvg from "../assets/acceleration.svg";

import { AccessoryIconType } from "../dtos/CardDTO";

function createAccessoryIconObject() {
  return {
    speed: SpeedSvg,
    acceleration: AccelerationSvg,
    turning_diameter: ForceSvg,
    gasoline_motor: GasolineSvg,
    electric_motor: EnergySvg,
    hybrid_motor: HybridSvg,
    exchange: ExchangeSvg,
    seats: PeopleSvg,
    default: CarSvg,
  };
}

export function getAccessoryIcon(type: AccessoryIconType) {
  const accessoryIcon = createAccessoryIconObject();
  return accessoryIcon[type] || accessoryIcon["default"];
}
