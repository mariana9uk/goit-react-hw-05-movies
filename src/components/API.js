import axios from "axios"
BASE_URL = ''


API_KEY = "cbacf6c985229a937b1ca784ecc5776c"
export const fetchMoviesByQuery = async()=>{
    const responce = await axios.get();

    return responce.data
}