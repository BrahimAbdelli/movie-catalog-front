import styled from "styled-components";

const PageWrapper = styled.div``;

const MovieListTitle = styled.h1``;

const SearchBox = styled.div`
  margin: 0 20px;
`;

const SearchBoxInput = styled.input`
  width: 70%;
  border-radius: 5px;
  min-height: 25px;
  border: solid 2px #c62828;
  background-color: #f5f5f5;
  ::placeholder {
    color: #c62828a3;
    padding-left: 7.5px;
  }

  @media only screen and (max-width: 768px) {
    width: 60%;
  }
`;

const SearchBoxButton = styled.button`
  width: 15%;
  margin-left: 5%;
  border-radius: 5px;
  min-height: 31px;
  font-weight: bold;
  background-color: #f5f5f5;
  color: #c62828;
  border: solid 2px #c62828;

  @media only screen and (max-width: 768px) {
    width: 20%;
  }
`;

const MoviesListWrapper = styled.div``;

const MovieWrapper = styled.div``;

const MovieImage = styled.img``;

const MovieTitle = styled.h2``;

export {
  PageWrapper,
  MovieListTitle,
  SearchBox,
  SearchBoxInput,
  SearchBoxButton,
  MoviesListWrapper,
  MovieWrapper,
  MovieImage,
  MovieTitle,
};
