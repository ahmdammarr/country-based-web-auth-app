import { Locales } from "@core/enums/locales";
import { getCookie } from "./cookies";
import { COOKIES } from "./constants";

export const getClientLocale = (): Locales => {
  return (getCookie(COOKIES.LOCALE)?.value as Locales) || Locales.EN;
};
