import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS
} from "./types";

const initialState = {
  name: '',
  email: '',
  password: '',
  registering: false
}

export function registration(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        registering: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        name: action.user.name,
        email: action.user.email,
        password: action.user.password,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registering: false
      };
    default:
      return state
  }
}
