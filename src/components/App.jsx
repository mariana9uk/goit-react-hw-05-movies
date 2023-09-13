import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
<nav>
  <NavLink to ="/">Home</NavLink>
  <NavLink to ="/movies">Movies</NavLink>
</nav>
<Routes>
  <Route path="/" element={<div>Home</div>}/>
  <Route path="/movies" element={<div>Movies</div>}/>
</Routes>
    </div>
  );
};
