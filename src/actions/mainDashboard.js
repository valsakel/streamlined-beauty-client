import { API_BASE_URL } from "../config";

export const POPULATE_MAIN_DASHBOARD_SUCCESS = 'POPULATE_MAIN_DASHBOARD_SUCCESS';
export const populateMainDashboardSuccess = data => ({
  type: POPULATE_MAIN_DASHBOARD_SUCCESS,
  data
});

export const POPULATE_MAIN_DASHBOARD_ERROR = 'POPULATE_MAIN_DASHBOARD_ERROR';
export const populateDashboardError = error => ({
  type: POPULATE_MAIN_DASHBOARD_ERROR,
  error
});

export const fetchMainDashboardData = () => (dispatch, getState) => {
  // const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/freelancers`, {
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
      dispatch(populateMainDashboardSuccess(data))
    })
    .catch(error => {
      console.error(error);
      dispatch(populateDashboardError(error));
    });
};


