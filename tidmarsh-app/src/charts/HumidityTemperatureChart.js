import React from "react";
import { Chart } from "react-charts";
import { useHumidityData, useTemperatureData } from "./charts.service";
import Chargement from "../components/Chargement";

const HumidityTemperatureChart = () => {
  const { data: humidity, isLoading: isLoadingHumidity } = useHumidityData();
  const {
    data: temperature,
    isLoading: isLoadingTemperature,
  } = useTemperatureData();
  const isLoading = isLoadingHumidity || isLoadingTemperature;

  const data = React.useMemo(
    () => [
      {
        label: "Humidité",
        data: humidity?.data,
        color: "#556B2F",
      },
      {
        label: "Température",
        data: temperature?.data,
        color: "#860909",
      },
    ],
    [humidity, temperature]
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "utc", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        display: "flex",
        fontWeight: "bold",
        color: "white",
      }}
    >
      <p
        className="ui label"
        style={{
          fontFamily: "Londrina Solid",
          writingMode: "vertical-rl",
          textOrientation: "upright",
          textAlign: "center",
          backgroundColor: "#556B2F",
          color: "#ece8dc",
        }}
      >
        Humidité
      </p>
      {isLoading ? <Chargement /> : <Chart data={data} axes={axes} />}
      <p
        className="ui label"
        style={{
          fontFamily: "Special Elite",
          writingMode: "vertical-rl",
          textOrientation: "upright",
          textAlign: "center",
          backgroundColor: "#860909",
          color: "#ece8dc",
        }}
      >
        Température
      </p>
    </div>
  );
};

export default HumidityTemperatureChart;
