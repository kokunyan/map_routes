import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectRoute } from "../../reducers/selectedRoute";
import { Table, Button } from "antd";
import styles from "./RouteTable.module.scss";

const RouteTable = () => {
  // Получение данных о маршрутах из Redux-хранилища
  const routesData = useSelector((state) => state.routes);
  // Получение выбранного маршрута из Redux-хранилища
  const selectedRoute = useSelector((state) => state.selectedRoute);
  // Получение функции dispatch для отправки действий в Redux-хранилище
  const dispatch = useDispatch();

  // Функция для обработки выбора маршрута
  const handleRouteSelect = (routeId) => {
    // Вызов действия selectRoute с выбранным идентификатором маршрута
    dispatch(selectRoute(routeId));
  };

  // Функция для очистки выбранного маршрута
  const clearRoute = () => {
    // Вызов действия selectRoute с аргументом null для очистки выбранного маршрута
    dispatch(selectRoute(null));
  };

  // Колонки таблицы маршрутов
  const columns = [
    {
      title: "Маршруты",
      dataIndex: "id",
      key: "id",
      // Отображение идентификатора маршрута в виде "№{id}"
      render: (id) => <div>№{id}</div>,
    },
  ];

  // Данные таблицы маршрутов
  const data = routesData.map((route) => ({ ...route, key: route.id }));

  // Возвращаем компонент таблицы маршрутов с использованием Ant Design
  return (
    <div className={styles.NavigationTable}>
      {/* Компонент Table от Ant Design */}
      <Table
        columns={columns}
        dataSource={data}
        // Обработчик события onClick для строк таблицы
        onRow={(record) => ({
          // При клике на строку вызываем функцию handleRouteSelect с идентификатором маршрута
          onClick: () => handleRouteSelect(record.id),
          // Добавляем класс "selected" к строке, если она соответствует выбранному маршруту
          className: selectedRoute === record.id ? "selected" : "",
        })}
      />
      {/* Кнопка для очистки выбранного маршрута */}
      <Button onClick={() => clearRoute()}>Очистить Маршруты</Button>
    </div>
  );
};

export default RouteTable;
