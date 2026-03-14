import type { BaseQueryFn, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { dynamicBaseQuery } from "./dynamicBaseQuery";
import { baseUrl, baseUrlkho, isAntPro } from "../../Pages/CasinoDetails/Constant";

const authFreeBaseQuery = fetchBaseQuery({
  baseUrl: isAntPro ? baseUrl : baseUrlkho,
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: dynamicBaseQuery as BaseQueryFn<string | { url: string; method: string; body?: any }, unknown, FetchBaseQueryError>,
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequestBody>({
      query: (body) => ({
        url: "/login/cleint-login",
        method: "POST",
        body,
      }),
    }),
    demoLogin: build.mutation<DemoLoginResponse, void>({
      queryFn: async (_arg, api, extraOptions) => {
        const result = await authFreeBaseQuery(
          {
            url: "/login/demo-login",
            method: "POST",
          },
          api,
          extraOptions
        );

        if (result.error) {
          return { error: result.error };
        }

        return { data: result.data as DemoLoginResponse };
      },
    }),
  }),
});

export const { useLoginMutation, useDemoLoginMutation } = authApi;
