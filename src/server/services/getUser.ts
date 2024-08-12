"use server";

import { ENDPOINTS } from "@core/enums/enpoints";
import { Get } from "@core/utils/api-client";

export const getUser = async () => {
  try {
    const user = await Get(ENDPOINTS.GETUSER);
    return user.data;
  } catch (error) {
    return error;
  }
};
