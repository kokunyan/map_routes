import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const selectedRouteSlice = createSlice({
  name: "selectedRoute",
  initialState,
  reducers: {
    selectRoute: (state, action) => action.payload,
  },
});

export const { selectRoute } = selectedRouteSlice.actions;
export default selectedRouteSlice.reducer;
