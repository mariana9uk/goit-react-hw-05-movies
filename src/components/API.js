import axios from "axios"
// const day=Date.now()
// const trendingUrl = 'https://api.themoviedb.org/3/trending/all/';



const API_KEY = "1e066df6273043e937131fcc939211ac"
 export const fetchTrending = async()=>{
    const responce = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`);
console.log(responce.data)
    return responce.data
}
export const fetchDetailsById=async(movieId)=>{
const responceDetails = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
console.log( responceDetails.data)
    return  responceDetails.data
}

//  const fetchMoviesByQuery = async()=>{
//     const responce = await axios.get();

//     return responce.data
// }
