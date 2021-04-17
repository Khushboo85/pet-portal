export enum ACTION_TYPE {
    LOGIN = "LOGIN",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAILED = "LOGIN_FAILED"
}
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  firstName: string;
  lastName: string;
  email: string;
}
