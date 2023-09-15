
import { nanoid } from 'nanoid';
import TrendingListItem from './trendingListItem';

const TrendingList = ({ trendingMovies }) => {
  const TrendingListItems = trendingMovies.map(trendingItem => (
    <TrendingListItem trendingItem={trendingItem} key={nanoid()}/>
  ));
  return <ul>
 {TrendingListItems}
  
    </ul>;
};
export default TrendingList;
