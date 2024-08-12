import { registerLocale, getNames, getName } from "i18n-iso-countries";
import langs from "i18n-iso-countries/langs/en.json";

export const countries = () => {
  registerLocale(langs);

  const i18nCountries = getNames("en", { select: "official" });

  return Object.keys(i18nCountries).map((key) => {
    return { label: i18nCountries[key], value: key };
  });
};

export const getCountry = (key: string) => {
  registerLocale(langs);
  return getName(key, "en");
};
