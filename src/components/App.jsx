import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Movies from "pages/Movies";
import Cast from "./Cast";
import Reviews from "./reviews";

export const App = () => {
  return (
    <div >

<Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path="movies" element={<Movies/>}/>
  <Route path="movies/:movieId" element={<MovieDetails/>}>
    <Route path="cast" element={<Cast/>}/>
    <Route path="reviews" element={<Reviews/>}/>
  </Route>
  <Route path="*" element={<Home />} />
  </Route>
</Routes>
    </div>
  );
};
