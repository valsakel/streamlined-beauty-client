import { API_BASE_URL } from '../config';
import normalizeErrors from './utils';
import { login } from './auth';
import {SubmissionError} from "redux-form";

export const registerUser = (user) => dispatch => {
  console.log('registerUser ran', user);
  return fetch(`${API_BASE_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeErrors(res))
    .then(res => res.json())
    .then(res => {
      console.log('register user email', user.email);
      console.log('register user password', user.password);

      dispatch(login(user.email, user.password))
    })
    .catch(err => {
      console.log('registerUser ERROR', err);
      // Could not register, return a SubmissionError for Redux Form
      return Promise.reject(
        new SubmissionError({
          _error: err.message
        })
      );
    })
};