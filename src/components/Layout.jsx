import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/selectors';
import { logOutUserThunk } from 'redux/operations';
import Loader from './Loader';

const Layout = () => {
  const authentificated = useSelector(selectAuthentificated);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUserThunk());
  };

  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {authentificated ? (
            <>
              <NavLink to="/contacts">Contacts</NavLink>
              <button onClick={handleLogOut}>Log Out</button>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <p>
          All Rights Reserved ||{' '}
          <a
            href="https://github.com/Ruslaana"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developed by Ruslana Onyshchuk
          </a>
          &#169; 2023
        </p>
      </footer>
    </div>
  );
};

export default Layout;
