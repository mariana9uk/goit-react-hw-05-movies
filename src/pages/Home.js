import fetchTrending from "components/API"
import TrendingList from "components/trendingList"
import { useEffect } from "react"
import { useState } from "react"


const Home = ()=>{
    const [trendingMovies, setTrendingMovies] = useState([])
    // const [loading, setLoading] = useState(false);
    useEffect(()=>{
        async function getTrending(){
            // setLoading(true);
            try {
              const fetchedTrending = await fetchTrending();
              setTrendingMovies(fetchedTrending.results);
            //   setLoading(false);
            } catch (error) {
              console.log(error);
            //   toast.error('Error', {
            //     // position: toast.POSITION.TOP_LEFT,
            //     // autoClose: 2000,});
            }
          }
   getTrending();
        }, [])
        


    return(
        <main>
        <h1>Trending today</h1>   
        <TrendingList  trendingMovies={trendingMovies}/>
        </main>
    )
}
export default Home