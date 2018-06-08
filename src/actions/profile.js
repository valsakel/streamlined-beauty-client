import { API_BASE_URL } from "../config";
import normalizeErrors from './utils';

export const FETCH_PROFILE_DETAILS_SUCCESS = 'FETCH_PROFILE_DETAILS_SUCCESS';
export const fetchProfileDetailsSuccess = data => ({
  type: FETCH_PROFILE_DETAILS_SUCCESS,
  data
});

export const FETCH_PROFILE_DETAILS_CLEAR = 'FETCH_PROFILE_DETAILS_CLEAR';
export const fetchProfileDetailsClear = () => ({
  type: FETCH_PROFILE_DETAILS_CLEAR
});

export const FETCH_PROFILE_DETAILS_ERROR = 'FETCH_PROFILE_DETAILS_ERROR';
export const fetchProfileDetailsError = error => ({
  type: FETCH_PROFILE_DETAILS_ERROR,
  error
});

export const FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS';
export const fetchServicesSuccess = data => ({
  type: FETCH_SERVICES_SUCCESS,
  data
});

export const FETCH_SERVICES_CLEAR = 'FETCH_SERVICES_CLEAR';
export const fetchServicesClear = () => ({
  type: FETCH_SERVICES_CLEAR,
});

export const FETCH_SERVICES_ERROR = 'FETCH_SERVICES_ERROR';
export const fetchServicesError = error => ({
  type: FETCH_SERVICES_ERROR,
  error
});

export const fetchProfileDetails = (userId) => (dispatch, getState) => {
  // const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/profiles/${userId}`, {
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
      dispatch(fetchProfileDetailsSuccess(data))
    })
    .catch(() => {
      const message ='Was not able to load profile details. Please try again later';
      dispatch(fetchProfileDetailsError(message));
    });
};

export const fetchServices = (user_id) => (dispatch, getState) => {
  console.log('fetchServices ran');
  return fetch(`${API_BASE_URL}/api/profiles/services/${user_id}`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      // Authorization: `Bearer ${authToken}`
    }
  })
  // .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch(fetchServicesSuccess(data))
    })
    .catch(() => {
      const message ='Was not able to load services. Please try again later';
      dispatch(fetchServicesError(message));
    });
};


