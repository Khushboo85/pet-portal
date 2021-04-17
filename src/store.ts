import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import reducer from "./reducer";
import loginSaga from "./modules/SignIn/sagas";
function* sagas() {
  yield all([loginSaga()]);
}
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);
export default store;
