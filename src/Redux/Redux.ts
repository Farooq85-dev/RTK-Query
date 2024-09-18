import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const posts = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getPost: builder.query<string, string>({
      query: () => "products",
    }),
  }),
});

export const { useGetPostQuery } = posts;
