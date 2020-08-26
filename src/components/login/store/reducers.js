import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from "./types";


let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: false, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        user: action.user
      };
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case LOGIN_FAILURE:
      return {
        loggedIn: false,
      };
    case LOGOUT:
      return {
        loggedIn: false,
      };
    default:
      return state
  }
}
