import { API_BASE_URL } from "../config";

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


export const fetchServices = (user_id) => (dispatch, getState) => {
  return fetch(`${API_BASE_URL}/api/services/${user_id}`, {
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


