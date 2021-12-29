import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import movieReducer from "../features/movieSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});
