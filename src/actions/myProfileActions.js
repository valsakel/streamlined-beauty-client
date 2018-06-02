import { API_BASE_URL } from "../config";

export const EDIT_ACCOUNT_START = 'EDIT_ACCOUNT_START';
export const editAccountStart = () => ({
  type: EDIT_ACCOUNT_START
});

export const EDIT_ACCOUNT_END = 'EDIT_ACCOUNT_END';
export const editAccountEnd = () => ({
  type: EDIT_ACCOUNT_END
});

// export const FETCH_PROFILE_DETAILS_ERROR = 'FETCH_PROFILE_DETAILS_ERROR';
// export const fetchProfileDetailsError = error => ({
//   type: FETCH_PROFILE_DETAILS_ERROR,
//   error
// });
//
// export const fetchProfileDetails = (userId) => (dispatch, getState) => {
//   // const authToken = getState().auth.authToken;
//   return fetch(`${API_BASE_URL}/api/profiles/${userId}`, {
//     method: 'GET',
//     headers: {
//       // Provide our auth token as credentials
//       // Authorization: `Bearer ${authToken}`
//     }
//   })
//   // .then(res => normalizeResponseErrors(res))
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       dispatch(fetchProfileDetailsSuccess(data))
//     })
//     .catch(error => {
//       console.error(error);
//       dispatch(fetchProfileDetailsError(error));
//     });
// };

