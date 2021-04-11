import { ACTION_TYPE, LoginRequest, LoginResponse } from "./types";

interface Login {
  type: ACTION_TYPE.LOGIN;
  payload: LoginRequest;
}
const login = (payload: LoginRequest): Login => {
  return {
    type: ACTION_TYPE.LOGIN,
    payload,
  };
};
interface LoginSuccess {
  type: ACTION_TYPE.LOGIN_SUCCESS;
  payload: LoginResponse;
}
const loginSuccess = (payload: LoginResponse): LoginSuccess => {
  return {
    type: ACTION_TYPE.LOGIN_SUCCESS,
    payload,
  };
};
interface LoginFailed {
  type: ACTION_TYPE.LOGIN_FAILED;
  payload: any;
}
const loginFailed = (payload: any): LoginFailed => {
  return {
    type: ACTION_TYPE.LOGIN_FAILED,
    payload,
  };
};
export type ACTION_TYPES = Login | LoginFailed | LoginSuccess;
