import styled from "styled-components";

const PageWrapper = styled.div``;

const MovieListTitle = styled.h1`
  color: #c62828;
`;

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

const MoviesListWrapper = styled.div`
  margin: 20px 2.5%;
  display: flex;
  flex-flow: wrap;
`;

const MovieWrapper = styled.div`
  cursor: pointer;
  width: 25%;
  background-color: transparent;
  @media only screen and (max-width: 1024px) {
    width: 50%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  transition: background-color 0.5s linear;
  :hover {
    background-color: #ffebee;
  }
`;

const MovieImage = styled.img`
  max-width: 70%;
  max-width: 70%;
  border: solid #fce4ec;
`;

const MovieTitle = styled.h2`
  max-width: 70%;
  margin: auto;
  color: #c62828;
`;

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
