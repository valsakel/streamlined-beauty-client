import { FETCH_SERVICES_SUCCESS, FETCH_SERVICES_ERROR } from '../actions/services';

const initialState = {
  data: [],
  error: null
};

export default function reducer (state = initialState, action) {
  if (action.type === FETCH_SERVICES_SUCCESS) {
    return {
      data: action.data,
      error: null
    }
  }

  if (action.type === FETCH_SERVICES_ERROR) {
    return {
      ...state,
      error: action.error
    }
  }
  return state;
};

