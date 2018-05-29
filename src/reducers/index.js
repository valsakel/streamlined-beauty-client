import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authUserReducer from './authUserReducer'

const rootReducer = combineReducers({
  authUserReducer,
  form: formReducer
});

export default rootReducer;
