import axios from 'axios';
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  CHECK_NAME,
  UPDATE_USER,
} from './types';

//login
export function loginUser(dataToSubmit) {
  const request = axios
    .post('/api/users/login', dataToSubmit)
    .then((res) => res.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

//register
export function registerUser(dataToSubmit) {
  const request = axios
    .post('/api/users/register', dataToSubmit)
    .then((res) => res.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios.get('/api/users/auth').then((res) => res.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logout() {
  const request = axios.get('/api/users/logout').then((res) => res.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export function checkName(name) {
  const request = axios
    .post('/api/users/checkName', name)
    .then((res) => res.data);

  return {
    type: CHECK_NAME,
    payload: request,
  };
}

export function updateUser(body) {
  const request = axios
    .post('/api/users/updateuser', body)
    .then((res) => res.data);

  return {
    type: UPDATE_USER,
    payload: request,
  };
}
