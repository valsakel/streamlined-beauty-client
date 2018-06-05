import { API_BASE_URL } from "../config";

export const FETCH_PROFILE_DETAILS_SUCCESS = 'FETCH_PROFILE_DETAILS_SUCCESS';
export const fetchProfileDetailsSuccess = data => ({
  type: FETCH_PROFILE_DETAILS_SUCCESS,
  data
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

export const FETCH_SERVICES_ERROR = 'FETCH_SERVICES_ERROR';
export const fetchServicesError = error => ({
  type: FETCH_SERVICES_ERROR,
  error
});


export const fetchProfileDetails = (userId) => (dispatch, getState) => {
  console.log(userId);
  // const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/profiles/${userId}`, {
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
      dispatch(fetchProfileDetailsSuccess(data))
    })
    .catch(error => {
      console.error(error);
      dispatch(fetchProfileDetailsError(error));
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
    .catch(error => {
      console.error(error);
      dispatch(fetchServicesError(error));
    });
};


