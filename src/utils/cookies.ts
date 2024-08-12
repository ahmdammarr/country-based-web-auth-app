import { cookies } from "next/headers";

export const getCookie = (cookie: string) => {
  const cookieStore = cookies();
  return cookieStore.get(cookie);
};

export const setCookie = ({
  cookie,
  value,
}: {
  cookie: string;
  value: string;
}) => {
  const cookieStore = cookies();
  return cookieStore.set(cookie, value);
};
