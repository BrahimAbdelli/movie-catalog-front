import { SearchBoxInput, SearchBox, SearchBoxButton } from "./Styled";

export default function SearchBar() {
  return (
    <SearchBox>
      <SearchBoxInput type="text" placeholder="Search..." />
      <SearchBoxButton type="button">Search</SearchBoxButton>
    </SearchBox>
  );
}
