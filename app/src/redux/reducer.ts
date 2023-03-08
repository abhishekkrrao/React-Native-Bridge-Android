import { combineReducers } from 'redux';
// reducer.js
const initialState = {
    user: null,
    loading: false,
    error: null
  };
  
  function reducer(state = initialState, action:any) {
    switch (action.type) {
      case 'FETCH_USER_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_USER_SUCCESS':
        return { ...state, loading: false, user: action.payload };
      case 'FETCH_USER_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }
  function loadingReducer(state = initialState, action:any) {
    switch (action.type) {
      case 'HOME_SCREEN_SUCCESS':
        return true;
      case 'HOME_SCREEN_SUCCESS':
      case 'HOME_SCREEN_FAILURE':
        return false;
      default:
        return state;
    }
  }


  // const rootReducer = combineReducers({
  //   user: userReducer,
  //   loading: loadingReducer
  // });
  
  // export default rootReducer;


  export default reducer;
  