import { API_BASE_URL } from '../config';
import normalizeErrors from './utils';
import {authError, authRequest, login} from './auth';

export const registerUser = (user) => dispatch => {
  dispatch(authRequest());
  return fetch(`${API_BASE_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeErrors(res))
    .then(res => res.json())
    .then(() => dispatch(login(user.email, user.password)))
    .catch(error => dispatch(authError(error.message)))
};