import { all } from "redux-saga/effects";
import { watchFetchRouteData } from "./routeSagas";

export default function* rootSaga() {
  yield all([watchFetchRouteData()]);
}
