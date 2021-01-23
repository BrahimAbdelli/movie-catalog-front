import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  movies: [],
  selectedMovie: {},
  action: "list",
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
    unselectMovie(state) {
      state.selectedMovie = null;
    },
    setAction(state, action) {
      state.action = action.payload;
      },
  },
});

export const {
  populateMovies,
  selectMovie,
  unselectMovie,
  setAction,
} = moviesSlice.actions;

export const selectMovies = (state) => {
  return state.movies.movies;
};

export const selectSelectedMovie = (state) => {
  return state.movies.selectedMovie;
};

export default moviesSlice.reducer;

export const selectAction = (state) => {
  return state.movies.action;
};
