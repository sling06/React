import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  CHECK_NAME,
  UPDATE_USER,
} from '../_actions/types';

const initialState = null;

export default function getcompleteState(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case LOGOUT_USER:
      return { ...state, logoutSuccess: action.payload };
    case CHECK_NAME:
      return { ...state, checkNameSuccess: action.payload };
    case UPDATE_USER:
      return { ...state, updateUserSuccess: action.payload };
    default:
      return state;
  }
}
