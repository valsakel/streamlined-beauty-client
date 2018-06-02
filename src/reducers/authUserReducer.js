import { AUTH_REQUEST } from '../actions/authUser';

const initialState = {
  authToken: null, // authToken !== null does not mean it has been validated
  currentUser: null,
  loading: false,
  error: null
};

export default function reducer (state = initialState, action) {

  if(action.type === AUTH_REQUEST) {
    console.log('hello AUTH_REQUEST');
  }

  return state;
}