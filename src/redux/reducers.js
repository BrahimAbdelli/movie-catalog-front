import { combineReducers } from "redux";

import movies from "./movies/moviesSlice";

const reducers = combineReducers({
  movies,
});

export default reducers;
