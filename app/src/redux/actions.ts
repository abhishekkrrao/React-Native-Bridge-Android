import { API_URL } from "./config";

// actions.js
export const fetchUser = () => {
  return async (dispatch: any) => {
    dispatch({ type: 'FETCH_USER_REQUEST' });
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      dispatch({ type: 'FETCH_USER_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_USER_FAILURE', payload: error });
    }
  };
};
