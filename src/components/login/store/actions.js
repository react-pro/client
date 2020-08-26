import { userService } from '../../_services/services';
import { history } from '../../_helpers/history';
import { alertActions } from "../../alerts/actions";
import {LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT} from "./types";

export const userActionsAuth = {
  login,
  logout,
};

function login(email, password) {

  return dispatch => {
    dispatch(request({ email }));

    userService.login(email, password)
      .then(
        user => {
          dispatch(success(user.user));
          history.push('/');
          dispatch(alertActions.success('Login successful!'));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        },
      )
  };

  function request(user) { return { type: LOGIN_REQUEST, user } }
  function success(user) { return { type: LOGIN_SUCCESS, user } }
  function failure(error) { return { type: LOGIN_FAILURE, error } }
}


function logout() {
  userService.logout();
  return { type: LOGOUT };
}
