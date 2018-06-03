import { API_BASE_URL } from "../config";

export const EDIT_PROFILE_ACCOUNT_START = 'EDIT_PROFILE_ACCOUNT_START';
export const editProfileAccountStart = () => ({
  type: EDIT_PROFILE_ACCOUNT_START
});

export const EDIT_PROFILE_ACCOUNT_END = 'EDIT_PROFILE_ACCOUNT_END';
export const editProfileAccountEnd = () => ({
  type: EDIT_PROFILE_ACCOUNT_END
});

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
  return fetch(`${API_BASE_URL}/api/myprofile`, {
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

