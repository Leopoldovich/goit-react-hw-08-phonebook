import './App.css';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import operations from './redux/login/auth-operations';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/Register'));
const LoginView = lazy(() => import('./views/Login'));
const Conacts = lazy(() => import('./views/Contacts'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Switch>
        <Suspense fallback={<p>Загружаем...</p>}>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <Conacts />
          </PrivateRoute>
        </Suspense>
        <Route>
          <HomeView />
        </Route>
      </Switch>
    </div>
  );
}
