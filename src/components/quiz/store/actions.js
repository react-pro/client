import {userService} from "../../_services/services";
import {history} from "../../_helpers";
import {alertActions} from "../../alerts/actions";
import {QUIZ_RESULTS_SEND_FAILURE, QUIZ_RESULTS_SEND_REQUEST, QUIZ_RESULTS_SEND_SUCCESS} from "./types";


export function sendQuizResults(id, results) {
  return dispatch => {
    dispatch(request(id, results));

    userService.sendResults(id, results)
      .then(
        results => {
          dispatch(success(results));
          history.push('/roadmap');
          dispatch(alertActions.success('Quiz passed! ', '/roadmap'));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(id, results) { return { type: QUIZ_RESULTS_SEND_REQUEST, id, results } }
  function success(results) { return { type: QUIZ_RESULTS_SEND_SUCCESS, results } }
  function failure(error) { return { type: QUIZ_RESULTS_SEND_FAILURE, error } }
}
