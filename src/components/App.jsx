import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div >
<nav>
  <NavLink to ="/">Home</NavLink>
  <NavLink to ="/movies">Movies</NavLink>
</nav>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/movies" element={<div>Movies</div>}/>
  <Route path="/movies/:movieId" element={<MovieDetails/>}/>
  <Route path="*" element={<Home />} />
</Routes>
    </div>
  );
};
