import {
  SET_PROFILE_SERVICE_VAL_CHANGE,
  CLEAR_PROFILE_SERVICE_VAL_CHANGE,
  ERROR_PROFILE_SERVICE_VAL_CHANGE,
  DELETE_PROFILE_SERVICE,
  DELETE_PROFILE_SERVICE_ERROR,
  EDIT_PROFILE_SERVICES_START,
  EDIT_PROFILE_SERVICES_END,
  SET_MY_PROFILE_PRICE_VAL_CHANGE,
  CLEAR_PROFILE_PRICE_VAL_CHANGE,
  POST_PROFILE_SERVICE_ERROR
}
  from '../actions/myProfileActions';

const initialState = {
  serviceVal: 'Pick a service',
  priceVal: 0,
  editServices: false,
  error: null
};

export default function reducer (state = initialState, action) {
  if (action.type === SET_PROFILE_SERVICE_VAL_CHANGE) {
    return {
      ...state,
      serviceVal: action.service,
      error: null
    }
  }

  if (action.type === CLEAR_PROFILE_SERVICE_VAL_CHANGE) {
    return {
      ...state,
      serviceVal: 'Pick a service'
    }
  }

  if (action.type === ERROR_PROFILE_SERVICE_VAL_CHANGE) {
    return {
      ...state,
      error: action.error
    }
  }

  // if (action.type === DELETE_PROFILE_SERVICE) {
  //   console.log('deleteProfileService REDUCER ran');
  //   return {
  //     ...state,
  //     // data: action.service,
  //     data: [...state, action.service],
  //     error: null
  //   }
  // }

  if (action.type === DELETE_PROFILE_SERVICE_ERROR) {
    return {
      ...state,
      error: action.error
    }
  }

  if (action.type === SET_MY_PROFILE_PRICE_VAL_CHANGE) {
    return {
      ...state,
      priceVal: action.price
    };
  }

  if (action.type === CLEAR_PROFILE_PRICE_VAL_CHANGE) {
    return {
      ...state,
      priceVal: 0,
    };
  }

  if (action.type === EDIT_PROFILE_SERVICES_START) {
    return {
      ...state,
      editServices: true
    };
  }

  if (action.type === EDIT_PROFILE_SERVICES_END) {
    return {
      ...state,
      serviceVal: 'Pick a service',
      priceVal: 0,
      editServices: false,
      error: null
    }
  }

  if (action.type === POST_PROFILE_SERVICE_ERROR) {
    return {
      ...state,
      error: action.error
    }
  }

  return state;
}