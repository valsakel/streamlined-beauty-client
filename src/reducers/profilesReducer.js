import { POPULATE_PROFILES_SUCCESS, POPULATE_PROFILES_ERROR } from '../actions/profiles';

const initialState = {
  data: [],
  error: null
};

export default function reducer (state = initialState, action) {
  if (action.type === POPULATE_PROFILES_SUCCESS) {
    return {
      data: action.data,
      error: null
    }
  }

  if (action.type === POPULATE_PROFILES_ERROR) {
    return {
      ...state,
      error: action.error
    }
  }

  return state;
}