import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  SET_AUTH_TOKEN,
  CLEAR_AUTH
} from '../actions/auth';

const initialState = {
  authToken: null,
  currentUser: null,
  loading: false,
  error: null
};

export default function reducer (state = initialState, action) {
  if (action.type === AUTH_REQUEST) {
    console.log('hello AUTH_REQUEST');
    return {
      ...state,
      loading: true,
      error: null
    }
  } else if (action.type === AUTH_SUCCESS) {
    console.log('hello AUTH_SUCCESS');
    return {
      ...state,
      loading: false,
      currentUser: action.currentUser
    }
  } else if (action.type === AUTH_ERROR) {
    console.log('hello AUTH_ERROR');
    return {
      ...state,
      loading: false,
      error: action.error
    }
  } else if (action.type === SET_AUTH_TOKEN) {
    console.log('hello SET_AUTH_TOKEN');
    return {
      ...state,
      authToken: action.authToken
    }
  } else if (action.type === CLEAR_AUTH) {
    return {
      ...state,
      lading: false,
      error: null
    }
  }
  return state;
}