import {
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_CLEAR,
  FETCH_SERVICES_ERROR
}
from '../actions/profile';

const initialState = {
  data: [],
  services: ['Pick a service', 'Make-up', 'Manicure', 'Pedicure', 'Wedding Trail', 'Haircut', 'Waxing', 'Facial'],
  error: null
};

export default function reducer (state = initialState, action) {
  if (action.type === FETCH_SERVICES_SUCCESS) {
    return {
      ...state,
      data: action.data,
      error: null
    }
  }

  if (action.type === FETCH_SERVICES_CLEAR) {
    return {
      ...state,
      data: [],
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

