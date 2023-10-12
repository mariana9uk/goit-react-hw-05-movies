import { fetchTrending } from 'components/API';
import { Loader } from 'components/Loader';
import TrendingList from 'components/trendingList';
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getTrending() {
      setLoading(true);
      try {
        const fetchedTrending = await fetchTrending();
        setTrendingMovies(fetchedTrending.results);
        setLoading(false);
      } catch (error) {
        toast.error('Error', {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 2000,
        });
      }
    }
    getTrending();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ToastContainer />
      {loading && <Loader />}
      <TrendingList trendingMovies={trendingMovies} />
    </div>
  );
};
export default Home;
