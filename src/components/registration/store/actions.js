import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from './types';

import { userService } from '../../_services/services';
import { history } from '../../_helpers/history';
import { alertActions } from "../../alerts/actions";

export const userActionRegister = {
  register,
};


function register(user) {
  return dispatch => {
    dispatch(request(user));

    userService.register(user)
      .then(
        user => {
          dispatch(success(user.user[0]));
          history.push('/login');
          dispatch(alertActions.success('Registration successful ', '/login'));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(user) { return { type: REGISTER_REQUEST, user } }
  function success(user) { return { type: REGISTER_SUCCESS, user } }
  function failure(error) { return { type: REGISTER_FAILURE, error } }
}

