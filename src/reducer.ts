import { combineReducers } from "redux";
import loginState from "./modules/SignIn/reducer";
export type RootState = ReturnType<typeof rootReducer>;
const rootReducer = combineReducers({
    loginState,
});
export default rootReducer;
