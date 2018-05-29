import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authUserReducer from './authUserReducer';
import mainDashboardDataReducer from './mainDashboardReducer';

const rootReducer = combineReducers({
  auth: authUserReducer,
  main_dashboard: mainDashboardDataReducer,
  form: formReducer
});

export default rootReducer;
