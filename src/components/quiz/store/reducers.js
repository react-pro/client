import {
  QUIZ_RESULTS_SEND_REQUEST,
  QUIZ_RESULTS_SEND_SUCCESS,
  QUIZ_RESULTS_SEND_FAILURE
} from "./types";

const initialState = {
  results: [],
  loading: false
}

export function quizReducer(state = initialState, action) {
  switch (action.type) {
    case QUIZ_RESULTS_SEND_REQUEST:
      return {
        ...state,
        loading: true
      };
    case QUIZ_RESULTS_SEND_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.results
      };
    case QUIZ_RESULTS_SEND_FAILURE:
      return {
        ...state,
        loading: false
      };
    default:
      return state
  }
}
