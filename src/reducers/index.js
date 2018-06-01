import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authUserReducer from './authUserReducer';
import profilesReducer from './profilesReducer';
import profileDetailsReducer from './profileDetailsReducer';

const rootReducer = combineReducers({
  auth: authUserReducer,
  profiles: profilesReducer,
  profileDetails: profileDetailsReducer,
  form: formReducer
});

export default rootReducer;
