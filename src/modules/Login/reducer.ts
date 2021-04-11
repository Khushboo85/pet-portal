import { ACTION_TYPES } from "./actions";
import { ACTION_TYPE, LoginResponse } from "./types";

interface STATE {
  loginResponse: null | LoginResponse;
}
const INIT_STATE: STATE = Object.assign(
  {},
  {
    loginResponse: null,
  }
);
const reducer = (state: STATE = INIT_STATE, action: ACTION_TYPES): STATE => {
  switch (action.type) {
    case ACTION_TYPE.LOGIN_SUCCESS:
      return {
        ...state,
        loginResponse: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
