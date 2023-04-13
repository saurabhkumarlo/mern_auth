import { configureStore } from "@reduxjs/toolkit";
import  usersReducer  from "../features/User";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
