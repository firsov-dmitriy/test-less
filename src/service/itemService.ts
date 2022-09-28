import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IItems } from "../Types/Type";

export const itemApi = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getItems: builder.query<IItems[], {}>({
      query: () => ({
        url: "/data",
      }),
    }),
  }),
});

export const { useGetItemsQuery } = itemApi;
