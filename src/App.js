import "./App.css";
import MovieList from "./pages/MovieList";
import { useSelector } from "react-redux";
import { selectAction, selectSelectedMovie } from "./redux/movies/moviesSlice";
import MovieDetails from "./pages/MovieDetails";
import AddMovie from "./pages/AddMovie";

function App() {
  const selected = useSelector(selectSelectedMovie);
  const action = useSelector(selectAction);
  return (
    <div className="App">
        {action ==="details" && <MovieDetails movie={selected} />}
        {action ==="list" && <MovieList/>}
        {action ==="add" && <AddMovie />}
    </div>
  );
}

export default App;
