// import { fetchMoviesByQuery } from "components/API"
// import { useState } from "react"
// import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
const Movies =()=>{
const[searchParams, setSearchParams]=useSearchParams()
const query = searchParams.get('query') ?? ""

// const [movies, setMovies]=useState({})
// useEffect(()=>{
//     if (movies === "") return;
//     async function getMovies(){
//         try {
//             const fetchedMovies = await fetchMoviesByQuery(query);
//             setMovies(fetchedMovies);
//             console.log(fetchedMovies)
//         } catch (error) {
//             console.log(error)
//         }
//     }
// getMovies();
// }, [newQuery])

const handleSubmit =(e)=>{
e.preventDefault()
    setSearchParams({query: e.target.elements.query.value})
}

    return(
        <div>
            <form onSubmit={handleSubmit}>
<input type="text" name="query" defaultValue={query} ></input>
<button type="submit">Search</button>
</form>
        </div>
    )
}
export default Movies