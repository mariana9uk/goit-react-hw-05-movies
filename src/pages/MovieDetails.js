import { fetchDetailsById } from 'components/API';
import GenresList from 'components/genresList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [details, setDetails] = useState({});
  useEffect(() => {
    async function getDetails() {
      try {
        const fetchedDetails = await fetchDetailsById(movieId);
        setDetails(fetchedDetails);
        console.log(fetchedDetails);
      } catch (error) {
        console.log(error);
      }
    }

    getDetails();
  }, [movieId]);
  console.log(details);
  const date =`${details.release_date}`
  const year = date.slice(0, 4);
  const baseUrl = `https://image.tmdb.org/t/p/w300`;
  const posterUrl = `${baseUrl}${details.poster_path}`;
  const votes= Number(details.vote_average)*10;
   const userScore =Math.round(votes);
 const genresArray = details.genres;
 
  console.log(genresArray)
  // const genresNames = genresArray.map(genre=>genre.name)
  // const genres = `${genresNames}`
  return (
<div>
      <button type="button">Go back</button>
      <div>
          <img src={posterUrl} alt={details.original_title}></img>
      <h1>
        {details.title} ({year})
      </h1>
      <p>User Score: {userScore}%</p>
      <h2>Overview</h2>
      <article>{details.overview}</article>
      <h3>Genres</h3>
     {/* <GenresList genresArray={genresArray}/> */}
     
      </div>
 
    </div>
  );
};
export default MovieDetails;
