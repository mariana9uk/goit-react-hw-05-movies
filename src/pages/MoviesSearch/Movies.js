import { fetchMoviesByQuery } from 'components/API';
import SearchedMoviesList from 'components/searchedMoviesList';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StyledForm } from './StyledMovies';
import { toast } from 'react-toastify';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState({});
  useEffect(() => {
    if (query === '') return;
    async function getMovies() {
      try {
        const fetchedMovies = await fetchMoviesByQuery(query);
        if (fetchedMovies && fetchedMovies.total_results === 0) {
          toast.warn('Sorry, we dont have this movie', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
        setMovies(fetchedMovies);
      } catch (error) {
        toast.error('Error', {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 2000,
        });
      }
    }
    getMovies();
  }, [query]);
  if (!movies) {
    return null;
  }

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.query.value });
    e.target.reset();
  };
  const searchedMoviesArr = movies.results;
  return (
    <div>
      <StyledForm>
        <form onSubmit={handleSubmit}>
          <input type="text" name="query"></input>
          <button type="submit">Search</button>
        </form>
        <SearchedMoviesList searchedMoviesArr={searchedMoviesArr} />
      </StyledForm>
    </div>
  );
};
export default Movies;
