import { Locales } from "@core/enums/locales";

import ar from "@core/locales/ar.json";
import en from "@core/locales/en.json";
import hi from "@core/locales/hi.json";

export const getTranslations = ({
  locale,
  key,
}: {
  locale: Locales;
  key: string;
}) => {
  const locales = {
    ["ar"]: JSON.parse(JSON.stringify(ar)),
    ["en"]: JSON.parse(JSON.stringify(en)),
    ["hi"]: JSON.parse(JSON.stringify(hi)),
  };
  return `${locales[locale][key]}`;
};
