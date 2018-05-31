import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authUserReducer from './authUserReducer';
import profilesReducer from './profilesReducer';

const rootReducer = combineReducers({
  auth: authUserReducer,
  main_dashboard: profilesReducer,
  form: formReducer
});

export default rootReducer;
