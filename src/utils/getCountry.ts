import { COUNTRIES } from "@core/enums/countries";
import { getCookie } from "./cookies";

export const getCountry = (): COUNTRIES => {
  return (getCookie("country")?.value as COUNTRIES) || COUNTRIES.AE;
};
