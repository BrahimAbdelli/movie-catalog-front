import Movie from "../components/Movie";
import SearchBar from "../components/SearchBar";
import {
  MovieListTitle,
  MoviesListWrapper,
  PageWrapper,
} from "../components/Styled";
import { useSelector } from "react-redux";
import { selectMovies } from "../redux/movies/moviesSlice";

export default function MovieList() {
  const movies = useSelector(selectMovies);
  return (
    <PageWrapper>
      <MovieListTitle>Movie Catalogue</MovieListTitle>
      <SearchBar />
      <MoviesListWrapper>
        {movies?.map((movie, index) => (
          <Movie movie={movie} key={index}></Movie>
        ))}
      </MoviesListWrapper>
    </PageWrapper>
  );
}
