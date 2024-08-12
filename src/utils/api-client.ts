import { Errors } from "@core/types/error.type";
import axios, {
  AxiosHeaders,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { COOKIES } from "./constants";
import { getCookie } from "./cookies";
import { getSession } from "next-auth/react";

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface ApiError {
  message: string;
  status?: number;
  details?: Errors;
}

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.ENDPOINT,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<AxiosHeaders>) => {
    const token = await getSession({
      req: config,
    });

    const country = getCookie(COOKIES.COUNTRIES)?.value;
    const prefferedlang = getCookie(COOKIES.LOCALE)?.value;

    if (token?.accessToken) {
      config.headers.Authorization = `Bearer ${token?.accessToken}`;
    }
    config.headers.country = country;
    config.headers.prefferedlang = prefferedlang;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    let apiError: ApiError = {
      message: Errors.SERVER_ERROR,
    };

    if (error.response) {
      apiError = {
        message: error.response.data.message || "API Error",
        status: error.response.status,
        details: error.response.data,
      };
    } else if (error.request) {
      apiError = {
        message: Errors.SERVER_ERROR,
      };
    } else {
      apiError = {
        message: error.message,
      };
    }

    return Promise.reject(apiError);
  }
);

export const Get = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  try {
    const response: ApiResponse<T> = await apiClient.get(endpoint);
    return response;
  } catch (error) {
    throw error as ApiError;
  }
};

export const Post = async <T, R>(
  endpoint: string,
  data: T
): Promise<ApiResponse<R>> => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response;
  } catch (error) {
    throw error as ApiError;
  }
};

export default apiClient;
