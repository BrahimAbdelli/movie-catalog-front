import "./App.css";
import MovieList from "./pages/MovieList";
import { useSelector } from "react-redux";
import { selectSelectedMovie } from "./redux/movies/moviesSlice";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const selected = useSelector(selectSelectedMovie);

  return (
    <div className="App">
      {!selected?.title ? (
        <MovieList></MovieList>
      ) : (
        <MovieDetails movie={selected} />
      )}
    </div>
  );
}

export default App;
