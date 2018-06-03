import {
  FETCH_MYPROFILE_DETAILS_SUCCESS,
  FETCH_MYPROFILE_DETAILS_ERROR,
  EDIT_PROFILE_ACCOUNT_START,
  EDIT_PROFILE_ACCOUNT_END } from '../actions/myProfileActions';

const initialState = {
  data: {},
  editAccount: false,
  editServices: false,
  error: null
};

export default function reducer (state = initialState, action) {
  if (action.type === FETCH_MYPROFILE_DETAILS_SUCCESS) {
    return {
      ...state,
      data: action.data
    }
  } else if (action.type === FETCH_MYPROFILE_DETAILS_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }

  if (action.type === EDIT_PROFILE_ACCOUNT_START) {
    console.log('hey EDIT ACCOUNT START action');
    return {
      ...state,
      editAccount: true
    }
  }

  if (action.type === EDIT_PROFILE_ACCOUNT_END) {
    return {
      ...state,
      editAccount: false
    }
  }

  return state;
};

