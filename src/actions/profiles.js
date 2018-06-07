import { API_BASE_URL } from "../config";
import normalizeErrors from './utils';

export const POPULATE_PROFILES_SUCCESS = 'POPULATE_PROFILES_SUCCESS';
export const populateProfilesSuccess = data => ({
  type: POPULATE_PROFILES_SUCCESS,
  data
});

export const POPULATE_PROFILES_ERROR = 'POPULATE_PROFILES_ERROR';
export const populateProfilesError = error => ({
  type: POPULATE_PROFILES_ERROR,
  error
});

export const SET_PROFILE_LOCATION_FILTER = 'SET_PROFILE_LOCATION_FILTER';
export const setProfileLocationFilter = location => ({
  type: SET_PROFILE_LOCATION_FILTER,
  location
});

export const CLEAR_PROFILE_LOCATION_FILTER = 'CLEAR_PROFILE_LOCATION_FILTER';
export const clearProfileLocationFilter = location => ({
  type: CLEAR_PROFILE_LOCATION_FILTER,
  location
});

export const SET_PROFILE_SERVICE_FILTER = 'SET_PROFILE_SERVICE_FILTER';
export const setProfileServiceFilter = service => ({
  type: SET_PROFILE_SERVICE_FILTER,
  service
});

export const CLEAR_PROFILE_SERVICE_FILTER = 'CLEAR_PROFILE_SERVICE_FILTER';
export const clearProfileServiceFilter = service => ({
  type: CLEAR_PROFILE_SERVICE_FILTER,
  service
});

export const fetchProfiles = (location) => (dispatch, getState) => {
  // const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/profiles`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      // Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeErrors(res))
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch(populateProfilesSuccess(data))
    })
    .catch(() => {
      const message ='Something went wrong. Please try again later';
      dispatch(populateProfilesError(message));
    });
};


