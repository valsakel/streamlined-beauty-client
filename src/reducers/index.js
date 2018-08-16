import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import auth from './authReducer';
import profiles from './profilesReducer';
import profile from './profileDetailsReducer';
import services from './servicesReducer';
import myProfile from './myProfileReducer';
import myProfileServices from './myProfileServicesReducer';

const rootReducer = combineReducers({
  auth,
  profiles,
  profile,
  services,
  myProfile,
  myProfileServices,
  form: formReducer
});

export default rootReducer;
