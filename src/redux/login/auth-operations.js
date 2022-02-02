import axios from 'axios';

import {
  registerRequest,
  registerSuccess,
  registerError,
  logInRequest,
  logInSuccess,
  logInError,
  logOutRequest,
  logOutSuccess,
  logOutError,
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserError,
} from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

const register =
  ({ name, email, password }) =>
  dispatch => {
    const user = {
      name,
      email,
      password,
    };
    dispatch(registerRequest());
    axios
      .post('/users/signup', user)
      .then(({ data }) => {
        token.set(data.token);
        dispatch(registerSuccess(data));
      })
      .catch(error => dispatch(registerError(error)));
  };

const logIn =
  ({ email, password }) =>
  dispatch => {
    const user = {
      email,
      password,
    };
    dispatch(logInRequest());
    axios
      .post('/users/login', user)
      .then(({ data }) => {
        token.set(data.token);
        dispatch(logInSuccess(data));
      })
      .catch(error => dispatch(logInError(error)));
  };

const logOut = () => dispatch => {
  dispatch(logOutRequest());
  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(logOutSuccess());
    })
    .catch(error => dispatch(logOutError(error)));
};

const fetchCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(fetchCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(fetchCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(fetchCurrentUserError(error.message));
  }
};

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
