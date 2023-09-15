import axios from "axios"
// const day=Date.now()
// const trendingUrl = 'https://api.themoviedb.org/3/trending/all/';



const API_KEY = "cbacf6c985229a937b1ca784ecc5776c"
 const fetchTrending = async()=>{
    const responce = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`);
console.log(responce.data)
    return responce.data
}

//  const fetchMoviesByQuery = async()=>{
//     const responce = await axios.get();

//     return responce.data
// }
export default fetchTrending