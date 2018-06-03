import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';

import authUserReducer from '../reducers/authReducer';
import { API_BASE_URL } from '../config';
import normalizeErrors from './utils';
import { saveAuthToken, clearAuthToken } from './localStorage';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
  type: AUTH_SUCCESS,
  currentUser
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
  type: AUTH_ERROR,
  error
});

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
  type: CLEAR_AUTH
});

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(authToken);
};

// Fetch request to authorize user
export const login = (email, password) => dispatch => {
  console.log(email, password);
  dispatch(authRequest());
  return fetch(`${API_BASE_URL}/api/signin`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(res => normalizeErrors(res))
    .then(res => res.json())
    .then(({authToken}) => {
      storeAuthInfo(authToken, dispatch);
      // const decodedToken = jwtDecode(authToken);
      // dispatch(setAuthToken(authToken));
      // console.log(decodedToken.user);
      // dispatch(authSuccess(decodedToken.user));

    })

    .then(res => console.log(res))
    .catch(err => {
      // const message =
      //   err.status === 401
      //     ? err.message
      //     : 'Unable to login, please try again';
      dispatch(authError(err));
      // Could not authenticate, so return a SubmissionError for Redux
      // Form
      return Promise.reject(
        new SubmissionError({
          _error: err.message
        })
      );


      // if (err.status === 401) {
      //   dispatch(authError(err.message));
      // }
      // console.log('hello from server');
      // console.log(err.status);
    })
};

export const refreshAuthToken = () => (dispatch, getState) => {
  console.log('refreshAuthToken ran');
  dispatch(authRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      // Provide our existing token as credentials to get a new one
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeErrors(res))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      // We couldn't get a refresh token because our current credentials
      // are invalid or expired, or something else went wrong, so clear
      // them and sign us out
      dispatch(authError(err));
      dispatch(clearAuth());
      clearAuthToken(authToken);
    });
};