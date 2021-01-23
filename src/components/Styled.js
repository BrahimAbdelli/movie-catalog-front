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

const AddButton = styled.button`
  width: 15%;
  margin-left: 00%;
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

const MovieInfo = styled.p`
  color: #c62828;
`;

const PageWrapperDetail = styled(PageWrapper)`
  text-align: left;
`;

const MovieInfoWrapper = styled.div`
  margin-left: 40px;
`;

const ReturnButton = styled.button`
  width: 15%;
  border-radius: 5px;
  min-height: 31px;
  font-weight: bold;
  background-color: #f5f5f5;
  color: #c62828;
  border: solid 2px #c62828;
`;

const GenreList = styled.ul`
  list-style: none;
  display: flex;
  & > li {
    color: white;
    background-color: #c62828;
    border-radius: 5px;
    padding: 2px 5px;
    margin-right: 5px;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-transform: uppercase;
  color: black;
`;

const FormGroup = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  text-transform: uppercase;
  color: black;
  display: flex;
  flex-direction: column;
  width: 33%;
  align-self: center;
`;
const FormField = styled.input`
  color: black;
  padding: 15px;
  outline: 0;
  border-width: 0 0 2px;
  border-color: #ebebeb;
  ::placeholder {
    text-transform: uppercase;
    font-family: "Kiona";
    font-size: large;
    letter-spacing: 0.1rem;
  }
`;
const FormButton = styled.button`
  width: 15%;
  margin-left: 00%;
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

const FormError = styled.p`
  color: #f74b1b;
`;
const Loader = styled.svg`
  animation: rotate 2s linear infinite;
  display: flex;
  align-self: center;
  width: 50px;
  height: 50px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const FormChangeButton = styled.button`
  width: 50%;
  margin-left: 00%;
  border-radius: 5px;
  min-height: 31px;
  font-weight: bold;
  background-color: #f5f5f5;
  color: #c62828;
  border: solid 2px #c62828;
  align-self: center;

  @media only screen and (max-width: 768px) {
    width: 20%;
  }
`;
export {
  PageWrapper,
  PageWrapperDetail,
  MovieListTitle,
  SearchBox,
  SearchBoxInput,
  SearchBoxButton,
  MoviesListWrapper,
  MovieWrapper,
  MovieImage,
  MovieTitle,
  MovieInfo,
  MovieInfoWrapper,
  ReturnButton,
  GenreList,
  AddButton,
  Form,
  FormButton,
  FormError,
  FormField,
  FormGroup,
  Loader,
  Title,
  Wrapper,
  FormChangeButton,
};
