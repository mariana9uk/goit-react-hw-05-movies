import axios from "axios"
// const day=Date.now()
const API_KEY = "1e066df6273043e937131fcc939211ac"
 export const fetchTrending = async()=>{
    const responce = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`);
    return responce.data
}
export const fetchDetailsById=async(movie_Id)=>{
const responceDetails = await axios.get(`https://api.themoviedb.org/3/movie/${movie_Id}?api_key=${API_KEY}&language=en-US`);

    return  responceDetails.data
}

export const fetchCast = async(movie_Id)=>{
    const responceCastDetails = await axios.get(`https://api.themoviedb.org/3/movie/${movie_Id}/credits?api_key=${API_KEY}&language=en-US`);

    return  responceCastDetails.data
}
export const fetchReviews = async(movie_Id)=>{
    const responceReviewsDetails = await axios.get(`https://api.themoviedb.org/3/movie/${movie_Id}/reviews?api_key=${API_KEY}&language=en-US`);
    return  responceReviewsDetails.data
}

export const fetchMoviesByQuery = async(query)=>{
    const responceMovies = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US`)
    return  responceMovies.data
}
