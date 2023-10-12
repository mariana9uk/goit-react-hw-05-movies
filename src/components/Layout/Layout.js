import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Header } from './LayoutStyled';

const Layout = () => {
  return (
    <main>
      <Header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default Layout;
