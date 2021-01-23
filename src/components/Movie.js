import { MovieWrapper, MovieImage, MovieTitle } from "./Styled";
import { useDispatch } from "react-redux";
import { selectMovie } from "../redux/movies/moviesSlice";
export default function Movie(props) {
  const dispatch = useDispatch();
  function select() {
    dispatch(selectMovie(props.movie));
  }
  return (
    <MovieWrapper onClick={select}>
      <MovieImage
        src={
          props.movie?.poster_path
            ? `http://image.tmdb.org/t/p/w185${props.movie?.poster_path}`
            : `https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`
        }
      />
      <MovieTitle>{props.movie?.title}</MovieTitle>
    </MovieWrapper>
  );
}
