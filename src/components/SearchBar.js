import { queryApi } from "../utils/queryApi";
import { SearchBoxInput, SearchBox, SearchBoxButton } from "./Styled";
import { useDispatch } from "react-redux";
import { populateMovies } from "../redux/movies/moviesSlice";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  async function callApi() {
    if (keyword) {
      const [res] = await queryApi(
        "movie?api_key=efb3d7bd52872c1d07a1787a51d66394&query=" +
          keyword +
          "&language=en-US"
      );
      if (res?.results) dispatch(populateMovies(res.results));
    }
  }
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (keyword) {
        const [res] = await queryApi(
          "movie?api_key=efb3d7bd52872c1d07a1787a51d66394&query=" +
            keyword +
            "&language=en-US"
        );
        if (res?.results) dispatch(populateMovies(res.results));
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [keyword, dispatch]);

  function handleChange(e) {
    setKeyword(e.target.value);
  }
  return (
    <SearchBox>
      <SearchBoxInput
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="Search..."
      />
      <SearchBoxButton type="button" onClick={callApi}>
        Search
      </SearchBoxButton>
    </SearchBox>
  );
}
