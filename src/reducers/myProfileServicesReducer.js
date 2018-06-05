import {
  ADD_PROFILE_SERVICES,
  ADD_PROFILE_SERVICES_ERROR,
  DELETE_PROFILE_SERVICE,
  DELETE_PROFILE_SERVICE_ERROR,
  EDIT_PROFILE_SERVICES_START,
  EDIT_PROFILE_SERVICES_END
}
from '../actions/myProfileActions';

const initialState = {
  data: [],
  editServices: false,
  error: null
};

export default function reducer (state = initialState, action) {
  if (action.type === ADD_PROFILE_SERVICES) {
    console.log('addProfileServices REDUCER ran');
    console.log(action.service);
    return {
      ...state,
      // data: action.service,
      data: [...state, action.service],
      error: null
    }
  }

  if (action.type === ADD_PROFILE_SERVICES_ERROR) {
    console.log(action.service);
    return {
      ...state,
      error: action.error
    }
  }


  if (action.type === DELETE_PROFILE_SERVICE) {
    console.log('deleteProfileService REDUCER ran');
    return {
      ...state,
      // data: action.service,
      data: [...state, action.service],
      error: null
    }
  }

  if (action.type === DELETE_PROFILE_SERVICE_ERROR) {
    return {
      ...state,
      error: action.error
    }
  }


  if (action.type === EDIT_PROFILE_SERVICES_START) {
    console.log('hey EDIT SERVICES START action');
    return {
      ...state,
      editServices: true
    }
  }

  if (action.type === EDIT_PROFILE_SERVICES_END) {
    return {
      ...state,
      editServices: false
    }
  }

  return state;
}