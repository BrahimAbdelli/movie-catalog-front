import { MovieWrapper, MovieImage, MovieTitle } from "./Styled";

export default function Movie(props) {
  return (
    <MovieWrapper>
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
