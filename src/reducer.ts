import { combineReducers } from "redux";
import loginState from "./modules/Login/reducer";
export type RootState = ReturnType<typeof rootReducer>;
const rootReducer = combineReducers({
    loginState,
});
export default rootReducer;
