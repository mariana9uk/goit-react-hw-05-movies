import { Link } from 'react-router-dom';
const TrendingListItem = ({trendingItem})=>{
 
return(
    <li>
   <Link to={`${trendingItem}`}>{trendingItem.name}{trendingItem.title}</Link>
    </li>
)
}
export default TrendingListItem