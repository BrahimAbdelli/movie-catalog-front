import {
  MovieInfo,
  MovieImage,
  MovieInfoWrapper,
  PageWrapperDetail,
  ReturnButton,
  MovieTitle,
  GenreList,
} from "../components/Styled";
import { useDispatch } from "react-redux";
import { unselectMovie, setAction } from "../redux/movies/moviesSlice";
import { useEffect, useState } from "react";
import { queryApi } from "../utils/queryApi";

export default function MovieDetails(props) {
  const dispatch = useDispatch();
  function unselect() {
    dispatch(unselectMovie(props.movie));
    dispatch(setAction('list'))
  }

  return (
    <PageWrapperDetail>
      <MovieTitle>{props.movie?.title}</MovieTitle>
      <MovieInfoWrapper>
      <MovieImage
        src={
          props.movie?.image
            ? process.env.REACT_APP_API_URL_UPLOADS + props.movie?.image
            : `https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`
        }
      />
        <MovieInfo>Release Date: {props.movie?.releaseDate}</MovieInfo>
        <MovieInfo>Rating:{props.movie?.rating}</MovieInfo>
        <MovieInfo>Genres:{props.movie?.genre}</MovieInfo>
        <ReturnButton onClick={unselect}>Back to search results</ReturnButton>
      </MovieInfoWrapper>
    </PageWrapperDetail>
  );
}
