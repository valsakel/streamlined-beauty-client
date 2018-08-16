import {
  FETCH_MYPROFILE_DETAILS_SUCCESS,
  FETCH_MYPROFILE_DETAILS_ERROR,
  EDIT_PROFILE_ACCOUNT_START,
  EDIT_PROFILE_ACCOUNT_END, REQUEST_MYPROFILE_DETAILS
} from '../actions/myProfileActions';

const initialState = {
  data: {},
  addedServices: [],
  editAccount: false,
  loading: false,
  error: null
};

export default function reducer (state = initialState, action) {
  if (action.type === REQUEST_MYPROFILE_DETAILS) {
    return {
      ...state,
      loading: true
    }
  }

  if (action.type === FETCH_MYPROFILE_DETAILS_SUCCESS) {
    return {
      ...state,
      data: action.data,
      loading: false
    }
  }

  if (action.type === FETCH_MYPROFILE_DETAILS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }

  if (action.type === EDIT_PROFILE_ACCOUNT_START) {
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

