import { fetchMoviesByQuery } from 'components/API';
import SearchedMoviesList from 'components/searchedMoviesList';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StyledForm } from './StyledMovies';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState({});
  useEffect(() => {
    if (query === '') return;
    async function getMovies() {
      try {
        const fetchedMovies = await fetchMoviesByQuery(query);
        setMovies(fetchedMovies);
        console.log(fetchedMovies);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [query]);
  if (!movies??!movies.results) {
    return
  }

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.query.value });
    e.target.reset();
  };
  const searchedMoviesArr = movies.results;
  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query"></input>
        <button type="submit">Search</button>
      </form>
      <SearchedMoviesList searchedMoviesArr={searchedMoviesArr} />
    </StyledForm>
  );
};
export default Movies;
