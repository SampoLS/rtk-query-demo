import { configureStore } from "@reduxjs/toolkit";
import { usersConfig } from "./usersConfig";
import usersReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [usersConfig.reducerPath]: usersConfig.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersConfig.middleware),
});
