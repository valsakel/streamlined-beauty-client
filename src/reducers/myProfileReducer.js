import { EDIT_ACCOUNT_START, EDIT_ACCOUNT_END } from '../actions/myProfileActions';

const initialState = {
  data: [],
  editAccount: false,
  editServices: false,
  error: null
};

export default function reducer (state = initialState, action) {
  if (action.type === EDIT_ACCOUNT_START) {
    console.log('hey EDIT ACCOUNT START action');
    return {
      ...state,
      editAccount: true
    }
  }

  if (action.type === EDIT_ACCOUNT_END) {
    return {
      ...state,
      editAccount: false
    }
  }

  return state;
};

