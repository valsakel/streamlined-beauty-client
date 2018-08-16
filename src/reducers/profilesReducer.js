import {
  POPULATE_PROFILES_SUCCESS,
  POPULATE_PROFILES_ERROR,
  SET_PROFILE_LOCATION_FILTER,
  SET_PROFILE_SERVICE_FILTER,
  CLEAR_PROFILE_LOCATION_FILTER,
  CLEAR_PROFILE_SERVICE_FILTER,
  POPULATE_PROFILES_CLEAR,
  REQUEST_PROFILES
} from '../actions/profiles';

const initialState = {
  data: [],
  locations: ['Pick a location', 'Acworth', 'Cartersville', 'Kennesaw', 'Marietta', 'Smyrna'],
  filteredLocation: 'Pick a location',
  filteredServiceType: 'Pick a pro',
  serviceTypes: ['Pick a pro', 'Barber', 'Cosmetologist', 'Esthetician', 'Make-Up Artist', 'Nail Specialist'],
  loading: false,
  error: null
};

export default function reducer (state = initialState, action) {
  if (action.type === REQUEST_PROFILES) {
    return {
      ...state,
      loading: true
    }
  }

  if (action.type === POPULATE_PROFILES_SUCCESS) {
    return {
      ...state,
      data: action.data,
      loading: false,
      error: null
    }
  }

  if (action.type === POPULATE_PROFILES_CLEAR) {
    return {
      ...state,
      data: [],
      error: null
    }
  }

  if (action.type === POPULATE_PROFILES_ERROR) {
    return {
      ...state,
      loading: false,
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