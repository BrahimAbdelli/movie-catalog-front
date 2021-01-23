import SearchBar from "../components/SearchBar";
import { MovieListTitle, PageWrapper } from "../components/Styled";

export default function MovieList() {
  return (
    <PageWrapper>
      <MovieListTitle>Movie Catalogue</MovieListTitle>
      <SearchBar />
    </PageWrapper>
  );
}
