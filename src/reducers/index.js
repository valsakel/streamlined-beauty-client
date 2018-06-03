import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import auth from './authReducer';
import profiles from './profilesReducer';
import profileDetails from './profileDetailsReducer';
import services from './servicesReducer';
import myProfile from './myProfileReducer';

const rootReducer = combineReducers({
  auth,
  profiles,
  profileDetails,
  services,
  myProfile,
  form: formReducer
});

export default rootReducer;
