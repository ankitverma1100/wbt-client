// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
// export const tvApi = createApi({
//   reducerPath: "tvApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: import.meta.env.VITE_BASE_URL_TV,
//     prepareHeaders: (headers: any) => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   endpoints: (build) => ({
// getChIds: build.query({
//   query: (body: any) => ({
//     url: `sports/channel-id-matchidwise`,
//     method: "POST",
//     body,
//   }),
// }),
//   }),
// });

// export const { useGetChIdsQuery } = tvApi;

import type {
  BaseQueryFn,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tvApi = createApi({
  reducerPath: "tvApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL_TV,
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
    getChIds: build.query({
      query: (body: any) => ({
        url: `sports/channel-id-matchidwise`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetChIdsQuery,
} = tvApi;
