import MovieDetails from 'pages/MovieDetails/MovieDetails';

import { Link, useLocation } from 'react-router-dom';
 const SearchedMoviesList = ({ searchedMoviesArr }) => {
  const location = useLocation();
 
  if (!searchedMoviesArr) {
    return;
  }
  const searchedMoviesListItem = searchedMoviesArr.map(searchedMovie => {
    const movieId = searchedMovie.id;

    return (
      <li key={searchedMovie.id}>
        <Link
          to={`${movieId}`}
          element={<MovieDetails />}
          state={{ from: location }}
        >
          {searchedMovie.title}
        </Link>
      </li>
    );
  });
  return <ul>{searchedMoviesListItem}</ul>;
};
export default SearchedMoviesList;
