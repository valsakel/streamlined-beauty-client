import { API_BASE_URL } from '../config';

import { authRequest } from './auth';

//
// export const registerUser = (user) => {
//   console.log('registerUser ran');
//   return (
//     fetch(`${API_BASE_URL}`)
//     .then(res => res.json())
//     .then(res => console.log('hello from server', res))
//     .catch(err => console.log('error from server', err))
//   );
// };


export const registerUser = (user) => dispatch => {
  console.log('registerUser ran', user);
  return fetch(`${API_BASE_URL}/api/signup`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    // .then(res => console.log('hello from server', res))
    .then(() => dispatch(authRequest()))

    .catch(err => console.log('error from server', err))
};