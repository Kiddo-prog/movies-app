import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    items: [],
  },
  reducers: {
    getAllMovies(state, action) {
      const newItem = action.payload;
    },
  },
});

export const movieAction = movieSlice.actions;
export default movieSlice.reducers;
