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
import { unselectMovie } from "../redux/movies/moviesSlice";
import { useEffect, useState } from "react";
import { queryApi } from "../utils/queryApi";

export default function MovieDetails(props) {
  const dispatch = useDispatch();
  const [genre, setGenre] = useState([]);
  function unselect() {
    dispatch(unselectMovie(props.movie));
  }

  useEffect(() => {
    async function fetch() {
      const [res] = await queryApi(
        "genre/movie/list?api_key=efb3d7bd52872c1d07a1787a51d66394"
      );
      setGenre(res.genres);
    }
    fetch();
  }, [props]);

  return (
    <PageWrapperDetail>
      <MovieTitle>{props.movie?.title}</MovieTitle>
      <MovieInfoWrapper>
        <MovieImage
          src={
            props.movie?.poster_path
              ? `http://image.tmdb.org/t/p/w185${props.movie?.poster_path}`
              : `https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`
          }
        />
        <MovieInfo>Release Date: {props.movie?.release_date}</MovieInfo>
        <MovieInfo>Rating:{props.movie?.vote_average}</MovieInfo>
        <MovieInfo>Genres:</MovieInfo>
        <GenreList>
          {genre
            ?.filter(function (gen) {
              return props.movie.genre_ids.indexOf(gen.id) > -1;
            })
            .map((gen, index) => (
              <li key={index}>{gen.name}</li>
            ))}
        </GenreList>
        <ReturnButton onClick={unselect}>Back to search results</ReturnButton>
      </MovieInfoWrapper>
    </PageWrapperDetail>
  );
}
