import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovieByTitle = createAsyncThunk('fetchMovieByTitle', (
  async(title) => {
    const request = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&t=${title}&plot=full`);
    const response = await request.json();
    return response;
  }
))

export const fetchMovieBySearch = createAsyncThunk('fetchMovieBySearch', (
  async(title) => {
    const request = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${title}&plot=full&type=movie`);
    const response = await request.json();
    return response;
  }
))

export const fetchMovieBySeries = createAsyncThunk('fetchMovieBySeries', (
  async(title) => {
    const request = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${title}&plot=full&type=series`);
    const response = await request.json();
    return response;
  }
))

export const fetchMovieByTitleID = createAsyncThunk('fetchMovieByTitleID', (
  async(title) => {
    const request = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&t=${title}&plot=full`);
    const response = await request.json();
    return response;
  }
))

const initialState = {
  items: {},
  movie: {},
  series: {},
  id: {},
  status: ''
}
export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getAllMovies(state, {payload}) {
      return {
        ...state,
        items: payload,
      }
    },
  },
  extraReducers: {
    [fetchMovieByTitle.pending]: (state) => {
      return {
        ...state,
        status: 'Loading...'
      }
    },
    [fetchMovieByTitle.fulfilled]: (state, {payload}) => {
      return{
        ...state,
        items: payload,
        status: 'fulfilled'
      }
    },
    [fetchMovieByTitle.rejected]: (state) => {
      return {
        ...state,
        status: 'Rejected'
      }
    },
    [fetchMovieBySearch.fulfilled]: (state, {payload}) => {
      return{
        ...state,
        movie: payload,
        status: 'fulfilled'
      }
    },
    [fetchMovieBySeries.fulfilled]: (state, {payload}) => {
      return{
        ...state,
        series: payload,
        status: 'fulfilled'
      }
    },
    [fetchMovieByTitleID.fulfilled]: (state, {payload}) => {
      return{
        ...state,
        id: payload,
        status: 'fulfilled'
      }
    }
  }
});


export const { getAllMovies } = movieSlice.actions;
export default movieSlice.reducer;
