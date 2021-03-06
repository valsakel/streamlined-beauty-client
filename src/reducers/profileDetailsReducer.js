import {
  FETCH_PROFILE_DETAILS_SUCCESS,
  FETCH_PROFILE_DETAILS_ERROR,
  FETCH_PROFILE_DETAILS_CLEAR
}
  from '../actions/profile';

const initialState = {
  data: {},
  error: null
};

export default function reducer (state = initialState, action) {
  if (action.type === FETCH_PROFILE_DETAILS_SUCCESS) {
    return {
      data: action.data,
      error: null
    }
  }

  if (action.type === FETCH_PROFILE_DETAILS_CLEAR) {
    return {
      data: {},
      error: null
    }
  }

  if (action.type === FETCH_PROFILE_DETAILS_ERROR) {
    return {
      ...state,
      error: action.error
    }
  }

  return state;
}