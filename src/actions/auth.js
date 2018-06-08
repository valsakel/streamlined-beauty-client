import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';
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
  console.log('storeAuthInfo ran');
  const decodedToken = jwtDecode(authToken);
  console.log('decodedToken', decodedToken);
  dispatch(setAuthToken(authToken));
  console.log('decodedToken user', decodedToken.user);
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(authToken);
};

// Fetch request to authorize user
export const login = (email, password) => dispatch => {
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
    })
    .then(res => console.log(res))
    .catch(error => {
      console.log('login ERROR', error);
      dispatch(authError(error));
      // Could not authenticate, return a SubmissionError for Redux Form
      return Promise.reject(
        new SubmissionError({
          _error: error.message
        })
      );
    })
};

export const refreshAuthToken = () => (dispatch, getState) => {
  console.log('refreshAuthToken ran');
  dispatch(authRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/refresh`, {
    method: 'POST',
    headers: {
      // Provide our existing token as credentials to get a new one
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeErrors(res))
    .then(res => res.json())
    .then(({authToken}) => {
      storeAuthInfo(authToken, dispatch)
    })
    .catch(err => {
      // If credentials are invalid or expired, or something else went wrong,
      // Clear auth token from local storage
      dispatch(authError(err));
      dispatch(clearAuth());
      clearAuthToken(authToken);
    });
};