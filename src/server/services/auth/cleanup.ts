"use server";

import { cookies } from "next/headers";

export const cleanup = async () => {
  const cookieStore = cookies();
  cookieStore.getAll().forEach((cookie) => cookieStore.delete(cookie.name));
};
