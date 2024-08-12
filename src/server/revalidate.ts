"use server";

import { revalidatePath } from "next/cache";

export const revaidate = (pathname: string) => revalidatePath(pathname);
