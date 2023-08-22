import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectAuthentificated, selectToken } from 'redux/selectors';
import { refreshUserThunk } from 'redux/operations';
import PrivateRoute from './PrivateRoute';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Register = lazy(() => import('pages/SignUp/SignUp'));
const LogIn = lazy(() => import('pages/LogIn/Login'));

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token || authentificated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authentificated]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;