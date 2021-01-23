import {
  MovieInfo,
  MovieImage,
  MovieInfoWrapper,
  PageWrapperDetail,
  ReturnButton,
  MovieTitle,
} from "../components/Styled";
import { useDispatch } from "react-redux";
import { unselectMovie, deleteMovie, setAction } from "../redux/movies/moviesSlice";
import { queryApi } from "../utils/queryApi";

export default function MovieDetails(props) {
  const dispatch = useDispatch();
  function unselect() {
    dispatch(unselectMovie(props.movie));
    dispatch(setAction('list'))
  }

  async function handleDelete() {
    const [, err] = await queryApi("/"+props.movie._id, null, "DELETE")
    if(err) {console.log(err)}
    else {dispatch(deleteMovie(props.movie));
    dispatch(setAction('list'))}
  }
  async function handleUpdate(){
    dispatch(setAction('update'))
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
        <ReturnButton onClick={handleDelete}>Delete</ReturnButton>
        <ReturnButton onClick={handleUpdate}>Update</ReturnButton>
      </MovieInfoWrapper>
    </PageWrapperDetail>
  );
}
