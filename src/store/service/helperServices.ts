import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type {
  BaseQueryFn,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";

export const helperApi = createApi({
  reducerPath: "helperApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL_HELPER,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("client-token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }) as BaseQueryFn<
    string | { url: string; method: string; body?: any },
    unknown,
    FetchBaseQueryError
  >,
  endpoints: (build) => ({
    fancyMinMax: build.query<any, string>({
      query: (eventId) => ({
        url: `/fancy/minmax/${eventId}`,
        method: "GET",
      }),
    }),
    marketMinMax: build.query<any, string>({
      query: (eventId) => ({
        url: `/event/minmax/${eventId}`,
        method: "GET",
      }),
    }),
    displayMsg: build.query<any, string>({
      query: (eventId) => ({
        url: `/event/display-message/${eventId}`,
        method: "GET",
      }),
    }),
    headMsg: build.query<any, void>({
      query: () => ({
        url: `/message/get/client`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useFancyMinMaxQuery,
  useMarketMinMaxQuery,
  useLazyDisplayMsgQuery,
  useHeadMsgQuery,
} = helperApi;
