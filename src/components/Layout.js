import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Outlet />
    </main>
  );
};
export default Layout;
