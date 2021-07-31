import { format } from "date-fns";
import { getPlatformDate } from "./getPlatformDate";

export function formatDateToPtBR(date: string) {
  return format(getPlatformDate(new Date(date)), "dd/MM/yyyy");
}
