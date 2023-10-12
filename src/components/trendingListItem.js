import { Link, useLocation } from 'react-router-dom';
const TrendingListItem = ({ trendingItem }) => {
  const movieId = trendingItem.id;
  const location = useLocation();
  return (
    <li>
      <Link to={`movies/${movieId}`} state={{ from: location }}>
        {trendingItem.name}
        {trendingItem.title}
      </Link>
    </li>
  );
};
export default TrendingListItem;
