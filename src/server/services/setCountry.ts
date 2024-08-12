"use server";

import { COUNTRIES } from "@core/enums/countries";
import { cookies } from "next/headers";

export const setCountry = async (country: COUNTRIES) => {
  const cookieStore = cookies();
  cookieStore.set("country", country || COUNTRIES.EG);
};
