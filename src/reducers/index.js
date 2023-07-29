import { combineReducers } from "@reduxjs/toolkit";
import routesReducer from "./routes";
import selectedRouteReducer from "./selectedRoute";

const rootReducer = combineReducers({
  routes: routesReducer,
  selectedRoute: selectedRouteReducer,
});

export default rootReducer;
