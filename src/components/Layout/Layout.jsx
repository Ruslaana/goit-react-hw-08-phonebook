import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/selectors';
import { logOutUserThunk } from 'redux/operations';
import Loader from '../Loader';
import { StyledA, StyledFooter, StyledP } from './Layout.styled';

const Layout = () => {
  const authentificated = useSelector(selectAuthentificated);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUserThunk());
  };

  return (
    <>
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
      <StyledFooter>
        <StyledP>
          All Rights Reserved ||{' '}
          <StyledA
            href="https://github.com/Ruslaana"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developed by Ruslana Onyshchuk
          </StyledA>
          &#169; 2023
        </StyledP>
      </StyledFooter>
    </>
  );
};

export default Layout;
