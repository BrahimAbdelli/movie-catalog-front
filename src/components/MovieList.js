import SearchBar from "../components/SearchBar";
import {
  MovieListTitle,
  MoviesListWrapper,
  PageWrapper,
} from "../components/Styled";

export default function MovieList() {
  return (
    <PageWrapper>
      <MovieListTitle>Movie Catalogue</MovieListTitle>
      <SearchBar />
      <MoviesListWrapper>{/* Insert movies here */}</MoviesListWrapper>
    </PageWrapper>
  );
}
