import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const selectedRoute = useSelector((state) => state.selectedRoute);
  const routesData = useSelector((state) => state.routes);

  const mapRef = useRef(null);
  const [currentRouteId, setCurrentRouteId] = useState(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map-container").setView([0, 0], 13);

      L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      }).addTo(mapRef.current);
    }

    // Check if the selected route is different from the currently displayed route
    if (selectedRoute !== currentRouteId) {
      // Clear all routes from the map
      clearRoutesFromMap();

      // Update the currentRouteId state to the selected route
      setCurrentRouteId(selectedRoute);

      // If a route is selected, display it on the map
      if (selectedRoute) {
        const routeData = routesData.find(
          (route) => route.id === selectedRoute
        );
        if (routeData) {
          const polyline = L.polyline(routeData.points, {
            className: "route-polyline",
          }).addTo(mapRef.current);
          mapRef.current.fitBounds(polyline.getBounds());
        }
      }
    }
  }, [selectedRoute, routesData, currentRouteId]);

  const clearRoutesFromMap = () => {
    if (mapRef.current) {
      mapRef.current.eachLayer((layer) => {
        if (layer.options.className === "route-polyline") {
          mapRef.current.removeLayer(layer);
        }
      });
    }
  };

  return (
    <div id="map-container" style={{ width: "100%", height: "500px" }}></div>
  );
};

export default Map;
