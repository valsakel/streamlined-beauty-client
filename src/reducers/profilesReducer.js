import {
  POPULATE_PROFILES_SUCCESS,
  POPULATE_PROFILES_ERROR,
  SET_PROFILE_LOCATION_FILTER,
  SET_PROFILE_SERVICE_FILTER, CLEAR_PROFILE_LOCATION_FILTER, CLEAR_PROFILE_SERVICE_FILTER
} from '../actions/profiles';

const initialState = {
  data: [],
  locations: ['Pick a location', 'Acworth', 'Cartersville', 'Kennesaw', 'Marietta', 'Smyrna'],
  filteredLocation: 'Pick a location',
  filteredServiceType: 'Pick a pro',
  serviceTypes: ['Pick a pro', 'Barber', 'Cosmetologist', 'Esthetician', 'Make-Up Artist', 'Nail Specialist'],
  error: null
};

export default function reducer (state = initialState, action) {
  if (action.type === POPULATE_PROFILES_SUCCESS) {
    return {
      ...state,
      data: action.data,
      error: null
    }
  }

  if (action.type === POPULATE_PROFILES_ERROR) {
    console.log('POPULATE_PROFILES_ERROR', action.error);
    return {
      ...state,
      error: action.error
    }
  }

  if (action.type === SET_PROFILE_LOCATION_FILTER) {
    return {
      ...state,
      filteredLocation: action.location
    }
  }

  if (action.type === CLEAR_PROFILE_LOCATION_FILTER) {
    return {
      ...state,
      filteredLocation: 'Pick a location'
    }
  }

  if (action.type === SET_PROFILE_SERVICE_FILTER) {
    return {
      ...state,
      filteredServiceType: action.service
    }
  }

  if (action.type === CLEAR_PROFILE_SERVICE_FILTER) {
    return {
      ...state,
      filteredServiceType: 'Pick a pro'
    }
  }

  return state;
}