import { fetchDetailsById } from 'components/API';
import Cast from 'components/Cast';
import GenresList from 'components/genresList';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';


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
  if (!details || !details.genres) {
    return null; 
  }
  console.log(details);
  const date =`${details.release_date}`
  const year = date.slice(0, 4);
  const baseUrl = `https://image.tmdb.org/t/p/w300`;
  const posterUrl = `${baseUrl}${details.poster_path}`;
  const votes= Number(details.vote_average)*10;
   const userScore =Math.round(votes);
 const genresAr = details.genres;
 console.log(genresAr)
 const genresListItems = genresAr.map((genre)=>{
  return(
        <li key={genre.id}>
        {genre.name}
      </li>
  )
 })
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
      <ul>{genresListItems}</ul>     
   
   </div>
 <div>
  <p>Additional information</p>
  <ul>
    <li>
    <Link to={`cast`} element={<Cast/>}>Cast</Link>
    </li>
    <li>
    <Link to={``}>Reviews</Link>
    </li>
  </ul>
  <Outlet/>
 </div>
    </div>
  );
};
export default MovieDetails;
