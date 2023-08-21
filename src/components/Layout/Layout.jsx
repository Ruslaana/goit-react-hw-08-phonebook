import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/selectors';
import { logOutUserThunk } from 'redux/operations';
import Loader from '../Loader';
import { StyledA, StyledFooter, StyledNavLink, StyledP } from './Layout.styled';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

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
          {authentificated ? (
            <>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              <button onClick={handleLogOut}>Log Out</button>
            </>
          ) : (
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  ></IconButton>
                  <StyledNavLink to="/">
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      HomePage
                    </Typography>
                  </StyledNavLink>
                  <StyledNavLink to="/login" color="inherit">
                    Login
                  </StyledNavLink>
                  <StyledNavLink to="/register">SignUp</StyledNavLink>
                </Toolbar>
              </AppBar>
            </Box>
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
