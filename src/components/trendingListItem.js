import { Link, useParams } from 'react-router-dom';
const TrendingListItem = ({trendingItem})=>{
const movieId = trendingItem.id
return(
    <li>
   <Link to={`movies/:${movieId}`}>{trendingItem.name}{trendingItem.title}</Link>
    </li>
)
}
export default TrendingListItem