import { fetchDetailsById } from "components/API"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const MovieDetails = ()=>{
    const {movieId}=useParams()
    const[Details, setDetails]=useState({})
    useEffect(()=>{
        async function getDetails(){
            // setLoading(true);
            try {
              const fetchedDetails = await fetchDetailsById(movieId);
              setDetails(fetchedDetails.results);
            //   setLoading(false);
            } catch (error) {
              console.log(error);
            //   toast.error('Error', {
            //     // position: toast.POSITION.TOP_LEFT,
            //     // autoClose: 2000,});
            }
          }
   getDetails();
        }, [])
    return(
        <main>
       {movieId}
        </main>
    )
}
export default MovieDetails