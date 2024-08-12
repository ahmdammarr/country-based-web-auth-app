"use server";

import { Locales } from "@core/enums/locales";

import { cookies } from "next/headers";

export const setClientLocale = async (locale?: Locales) => {
  const cookieStore = cookies();
  cookieStore.set("locale", locale || Locales.EN);
};
