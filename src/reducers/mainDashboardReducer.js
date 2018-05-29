import { POPULATE_MAIN_DASHBOARD_SUCCESS, POPULATE_MAIN_DASHBOARD_ERROR } from '../actions/mainDashboard';

const initialState = {
  data: [],
  error: null
};

export default function reducer (state = initialState, action) {
  if (action.type === POPULATE_MAIN_DASHBOARD_SUCCESS) {
    return {
      data: action.data,
      error: null
    }
  }

  if (action.type === POPULATE_MAIN_DASHBOARD_ERROR) {
    return {
      ...state,
      error: action.error
    }
  }

  return state;
}