import { SubmissionError } from 'redux-form';

import authUserReducer from '../reducers/authUserReducer';
import { API_BASE_URL } from '../config';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type: AUTH_REQUEST
});


export const authUserCreator = (email, password) => dispatch => {
  return fetch(`${API_BASE_URL}/api/signup`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(res => res.json())
    .then(res => console.log('hello from server', res))

    .then(() => dispatch(authRequest()));

};