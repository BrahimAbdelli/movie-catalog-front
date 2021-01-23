import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  movies: [],
  selectedMovie: {},
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    populateMovies(state, action) {
      state.movies = action.payload;
    },
    selectMovie(state, action) {
      state.selectedMovie = action.payload;
    },
  },
});

export const { populateMovies, selectMovie } = moviesSlice.actions;

export const selectMovies = (state) => {
  return state.movies.movies;
};

export const selectSelectedMovie = (state) => {
  return state.movies.selectedMovie;
};

export default moviesSlice.reducer;
