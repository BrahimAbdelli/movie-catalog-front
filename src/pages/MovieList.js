import Movie from "../components/Movie";
import SearchBar from "../components/SearchBar";
import {
  MovieListTitle,
  MoviesListWrapper,
  PageWrapper,
} from "../components/Styled";
import { useSelector, useDispatch } from "react-redux";
import { selectMovies, setAction } from "../redux/movies/moviesSlice";
import { AddButton } from "../components/Styled"

export default function MovieList() {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  function Add() {
    dispatch(setAction("add"));
  }
  return (
    <PageWrapper>
      <MovieListTitle>Movie Catalogue</MovieListTitle>
      <SearchBar />
      <MoviesListWrapper>
        {movies?.map((movie, index) => (
          <Movie movie={movie} key={index}></Movie>
        ))}
      </MoviesListWrapper>
      <AddButton onClick={Add}>Add</AddButton>
    </PageWrapper>
  );
}
