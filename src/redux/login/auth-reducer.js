import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  registerSuccess,
  registerError,
  logInSuccess,
  logInError,
  logOutSuccess,
  logOutError,
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserError,
} from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [logInSuccess]: (_, { payload }) => payload.user,
  [logOutSuccess]: () => initialUserState,
  [fetchCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [logInSuccess]: (_, { payload }) => payload.token,
  [logOutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerError]: setError,
  [logInError]: setError,
  [logOutError]: setError,
  [fetchCurrentUserError]: setError,
});

const isLoggedIn = createReducer(false, {
  [registerSuccess]: () => true,
  [logInSuccess]: () => true,
  [fetchCurrentUserSuccess]: () => true,
  [registerError]: () => false,
  [logInError]: () => false,
  [fetchCurrentUserError]: () => false,
  [logOutSuccess]: () => false,
});

const isFetchingCurrentUser = createReducer(false, {
  [fetchCurrentUserRequest]: () => true,
  [fetchCurrentUserSuccess]: () => false,
  [fetchCurrentUserError]: () => false,
});
export default combineReducers({
  user,
  isLoggedIn,
  token,
  isFetchingCurrentUser,
  error,
});
