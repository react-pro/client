import { ALERT_CLEAR, ALERT_ERROR, ALERT_SUCCESS } from "./types";

export const alertActions = {
  success,
  error,
  clear
};

function success(message, link) {
  return { type: ALERT_SUCCESS, message, link };
}

function error(message) {
  return { type: ALERT_ERROR, message };
}

function clear() {
  return { type: ALERT_CLEAR };
}
