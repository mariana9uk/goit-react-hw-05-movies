import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { lazy } from "react";
import { GlobalStyle } from "globalStyles";
 
const Home = lazy(()=>import('../pages/Home'))
const Movies = lazy(()=>import('../pages/Movies'))
const MovieDetails = lazy(()=>import('../pages/MovieDetails/MovieDetails'))
const Reviews = lazy(()=>import('../components/reviews'))
const Cast = lazy(()=>import('../components/Cast'))

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
<GlobalStyle/>
    </div>
  );
};
