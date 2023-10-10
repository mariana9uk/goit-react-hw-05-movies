import MovieDetails from 'pages/MovieDetails';
import { Link } from 'react-router-dom';
const SearchedMoviesList = ({ searchedMoviesArr }) => {
  if (!searchedMoviesArr) {
    return;
  }
  const searchedMoviesListItem = searchedMoviesArr.map(searchedMovie => {
    const movieId = searchedMovie.id;
    return (
      <li key={searchedMovie.id}>
        <Link to={`${movieId}`} element={<MovieDetails />}>
          {searchedMovie.title}
        </Link>
      </li>
    );
  });
  return <ul>{searchedMoviesListItem}</ul>;
};
export default SearchedMoviesList;
