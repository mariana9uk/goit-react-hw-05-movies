import TrendingListItem from './trendingListItem';

const TrendingList = ({ trendingMovies }) => {
  const TrendingListItems = trendingMovies.map(trendingItem => (
    <TrendingListItem trendingItem={trendingItem} key={trendingItem.id} />
  ));
  return <ul>{TrendingListItems}</ul>;
};
export default TrendingList;
