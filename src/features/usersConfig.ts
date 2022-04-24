import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersConfig = createApi({
  reducerPath: "fetchUsers",
  tagTypes: ["users"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),
  }),
});

export const { useFetchUsersQuery } = usersConfig;
