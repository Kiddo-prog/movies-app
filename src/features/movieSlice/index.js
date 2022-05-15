import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovieByTitle = createAsyncThunk('fetchMovieByTitle', (
  async(title) => {
    const request = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&t=${title}&plot=full`);
    const response = await request.json();
    console.log(response);
    return response;
  }
))

export const fetchMovieBySearch = createAsyncThunk('fetchMovieBySearch', (
  async(title) => {
    const request = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${title}&plot=full&type=movie`);
    const response = await request.json();
    console.log(response);
    return response;
  }
))

export const fetchMovieBySeries = createAsyncThunk('fetchMovieBySeries', (
  async(title) => {
    const request = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${title}&plot=full&type=series`);
    const response = await request.json();
    console.log(response);
    return response;
  }
))

export const fetchMovieByTitleID = createAsyncThunk('fetchMovieByTitleID', (
  async(title) => {
    const request = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&t=${title}&plot=full`);
    const response = await request.json();
    console.log(response);
    return response;
  }
))

const initialState = {
  items: {},
  movie: {},
  series: {},
  id: {}
}
export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getAllMovies(state, {payload}) {
      return {
        ...state,
        items: payload
      }
    },
  },
  extraReducers: {
    [fetchMovieByTitle.pending]: () => {
      console.log('Pending')
    },
    [fetchMovieByTitle.fulfilled]: (state, {payload}) => {
      console.log("Fulfilled")
      return{
        ...state,
        items: payload
      }
    },
    [fetchMovieByTitle.rejected]: () => {
      console.log('Rejected')
    },
    [fetchMovieBySearch.fulfilled]: (state, {payload}) => {
      console.log("Fulfilled")
      return{
        ...state,
        movie: payload
      }
    },
    [fetchMovieBySeries.fulfilled]: (state, {payload}) => {
      console.log("Fulfilled")
      return{
        ...state,
        series: payload
      }
    },
    [fetchMovieByTitleID.fulfilled]: (state, {payload}) => {
      console.log("Fulfilled")
      return{
        ...state,
        id: payload
      }
    }
  }
});


export const { getAllMovies } = movieSlice.actions;
export default movieSlice.reducer;
