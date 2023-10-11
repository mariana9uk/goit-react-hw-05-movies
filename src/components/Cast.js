import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from './API';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState({});
  useEffect(() => {
    async function getCastDetails() {
      try {
        const fetchedCast = await fetchCast(movieId);
        setCast(fetchedCast);
          } catch (error) {
        console.log(error);
      }
    }
    getCastDetails();
  }, []);
  if (!cast || !cast.cast) {
    return null;
  }

  const castArr = cast.cast;
  const castListItems = castArr.map(actor => {
    const baseUrl = `https://image.tmdb.org/t/p/w200`;
    const pictureUrl = `${baseUrl}${actor.profile_path}`;

    return (
      <li key={actor.id}>
        <h3>{actor.name}</h3>
        <p>Role: {actor.character}</p>
        <img src={pictureUrl} alt=""></img>
      </li>
    );
  });
  return <ul>{castListItems}</ul>;
};
export default Cast;
