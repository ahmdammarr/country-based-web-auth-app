import { COUNTRIES } from "@core/enums/countries";
import { Locales } from "@core/enums/locales";
import * as yup from "yup";
import { getTranslations } from "./getTranslations";

export const getLoginvalidation = ({
  country,
  locale,
}: {
  country: COUNTRIES;
  locale: Locales;
}) => {
  const passwordSchema = yup
    .string()
    .min(8, getTranslations({ locale, key: "password_min_length" }))
    .required(getTranslations({ locale, key: "password_required" }));
  const ValidationSchemas = {
    [COUNTRIES.AE]: yup.object().shape({
      password: passwordSchema,
      username: yup
        .string()
        .matches(
          /^[a-zA-Z0-9]{5,}$/,
          getTranslations({ locale, key: "username_alphanumeric_min_5" })
        )
        .required(
          getTranslations({ locale, key: "username_is_required_field" })
        ),
    }),
    [COUNTRIES.IN]: yup.object().shape({
      password: passwordSchema,
      username: yup
        .string()
        .matches(
          /^(?=[A-Za-z])(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{6,}$/,
          getTranslations({
            locale,
            key: "username_start_letter_min_6",
          })
        )
        .required(
          getTranslations({ locale, key: "username_is_required_field" })
        ),
    }),
    [COUNTRIES.US]: yup.object().shape({
      password: passwordSchema,
      username: yup
        .string()
        .matches(
          /^[a-zA-Z0-9]{6,}$/,
          getTranslations({
            locale,
            key: "username_start_letter_min_6",
          })
        )
        .required(
          getTranslations({ locale, key: "username_is_required_field" })
        ),
    }),
    [COUNTRIES.EG]: yup.object().shape({
      password: passwordSchema,
      username: yup
        .string()
        .matches(
          /^[a-zA-Z0-9]{4,}$/,
          getTranslations({
            locale,
            key: "username_alphanumeric_min_4",
          })
        )
        .required(
          getTranslations({ locale, key: "username_is_required_field" })
        ),
    }),
  };
  return ValidationSchemas[country];
};
