import { put, call, takeLatest } from "redux-saga/effects";
import { fetchRouteSuccess, fetchRouteFailure } from "../reducers/routes";
import { selectRoute } from "../reducers/selectedRoute";
import axios from "axios";

function fetchRouteDataFromAPI(routeId) {
  const apiUrl = `http://router.project-osrm.org/route/v1/driving/${routeId.join(
    ";"
  )}?geometries=geojson`;
  return axios
    .get(apiUrl)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error.message);
    });
}

function* fetchRouteData(action) {
  try {
    const routeId = action.payload;
    const data = yield call(fetchRouteDataFromAPI, routeId);

    // Успешное получение маршрута
    yield put(fetchRouteSuccess({ routeId, data }));
  } catch (error) {
    // Неудачное получение маршрута
    yield put(fetchRouteFailure(error.message));
  }
}

export function* watchFetchRouteData() {
  yield takeLatest(selectRoute, fetchRouteData);
}
