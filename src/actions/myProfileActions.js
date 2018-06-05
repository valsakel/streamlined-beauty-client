import { API_BASE_URL } from '../config';
import { fetchServices } from './profile';

export const EDIT_PROFILE_ACCOUNT_START = 'EDIT_PROFILE_ACCOUNT_START';
export const editProfileAccountStart = () => ({
  type: EDIT_PROFILE_ACCOUNT_START
});

export const EDIT_PROFILE_ACCOUNT_END = 'EDIT_PROFILE_ACCOUNT_END';
export const editProfileAccountEnd = () => ({
  type: EDIT_PROFILE_ACCOUNT_END
});

export const EDIT_PROFILE_SERVICES_START = 'EDIT_PROFILE_SERVICES_START';
export const editProfileServicesStart = () => ({
  type: EDIT_PROFILE_SERVICES_START
});

export const EDIT_PROFILE_SERVICES_END = 'EDIT_PROFILE_SERVICES_END';
export const editProfileServicesEnd = () => ({
  type: EDIT_PROFILE_SERVICES_END
});

export const ADD_PROFILE_SERVICES = 'ADD_PROFILE_SERVICES';
export const addProfileServices = (service) => {
  console.log('addProfileServices ran');
  console.log(service);
  return {
  type: ADD_PROFILE_SERVICES,
  service
}
};

export const ADD_PROFILE_SERVICES_ERROR = 'ADD_PROFILE_SERVICES_ERROR';
export const addProfileServicesError = (error) => {
  console.log('addProfileServicesError ran');
  return {
    type: ADD_PROFILE_SERVICES_ERROR,
    error
  }
};


export const FETCH_MYPROFILE_DETAILS_SUCCESS = 'FETCH_MYPROFILE_DETAILS_SUCCESS';
export const fetchMyProfileDetailsSuccess = data => ({
  type: FETCH_MYPROFILE_DETAILS_SUCCESS,
  data
});

export const FETCH_MYPROFILE_DETAILS_ERROR = 'FETCH_MYPROFILE_DETAILS_ERROR';
export const fetchMyProfileDetailsError = error => ({
  type: FETCH_MYPROFILE_DETAILS_ERROR,
  error
});

export const fetchMyProfileDetails = () => (dispatch, getState) => {
  console.log('fetchMyProfileDetails ran');
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/myprofile/details`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
  // .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dispatch(fetchMyProfileDetailsSuccess(data))
    })
    .catch(error => {
      console.error(error);
      dispatch(fetchMyProfileDetailsError(error));
    });
};

export const postMyProfileService = (service) => (dispatch, getState) => {
  console.log('fetchMyProfileDetails ran');
  // const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/myprofile/service`, {
    method: 'POST',
    headers: {
      // Provide our auth token as credentials
      // Authorization: `Bearer ${authToken}`,
      'Content-type': 'application/json'
    },
    body: JSON.stringify(service)
  })
  // .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      console.log('SERVICE', data);
      // dispatch(fetchMyProfileDetailsSuccess(data))
      const user_id = getState().auth.currentUser.user_id;
      dispatch(fetchServices(user_id))
    })
    .catch(error => {
      console.error(error);
      dispatch(addProfileServicesError(error));
    });
};

