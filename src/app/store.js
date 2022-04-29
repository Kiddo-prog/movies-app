import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../features/movieSlice";

export default configureStore({
  reducer: {
    movies: movieSlice,
  },
});
