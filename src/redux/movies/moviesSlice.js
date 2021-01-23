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
    deleteMovie(state, action) {
      state.selectedMovie = null;
      const payload = action.payload;
      const index = state.movies.findIndex((item) => item._id=== payload._id);
      if (index !== -1) {
        state.movies.splice(index, 1);
      }
    },
  },
});

export const {
  populateMovies,
  selectMovie,
  unselectMovie,
  deleteMovie,
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
