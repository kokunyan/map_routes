import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    points: [
      [59.84660399, 30.29496392],
      [59.82934196, 30.42423701],
      [59.83567701, 30.38064206],
    ],
  },
  {
    id: 2,
    points: [
      [59.82934196, 30.42423701],
      [59.82761295, 30.41705607],
      [59.84660399, 30.29496392],
    ],
  },
  {
    id: 3,
    points: [
      [59.83567701, 30.38064206],
      [59.84660399, 30.29496392],
      [59.82761295, 30.41705607],
    ],
  },
];

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    fetchRouteSuccess: (state, action) => {
      // Обработка успешного получения маршрута из API
      // ...
    },
    fetchRouteFailure: (state, action) => {
      // Обработка неудачного получения маршрута из API
      // ...
    },
  },
});

export const { fetchRouteSuccess, fetchRouteFailure } = routesSlice.actions;
export default routesSlice.reducer;
