// Импорт необходимых модулей и компонентов
import React, { useState } from "react";
import style from "./App.scss";
import { Provider } from "react-redux";
import RouteTable from "./components/RouteTable/RouteTable";
import Map from "./components/Map/Map";
import store from "./store";

// Основной компонент App
function App() {
  return (
    // Обертка для предоставления доступа к Redux-хранилищу во всем приложении
    <Provider store={store}>
      {/* Обертка для стилизации главной страницы */}
      <div className="MainPage">
        {/* Компонент таблицы маршрутов */}
        <RouteTable />
        {/* Компонент карты */}
        <Map />
      </div>
    </Provider>
  );
}

// Экспорт компонента App для использования в других частях приложения
export default App;
