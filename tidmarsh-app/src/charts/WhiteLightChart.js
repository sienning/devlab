import React from "react";
import { Chart } from "react-charts";
import { useWhiteLightData } from "../charts/charts.service";
import Chargement from "../components/Chargement";

const WhiteLightChart = () => {
  const { data: whiteLight, isLoading } = useWhiteLightData();

  const data = React.useMemo(
    () => [
      {
        label: "Humidité",
        data: whiteLight?.data,
        color: "#696969",
      },
    ],
    [whiteLight]
  );

  const series = React.useMemo(
    () => ({
      type: "bar",
    }),
    []
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
        marginTop: "20px",
        width: "400px",
        height: "300px",
        display: "flex",
        fontWeight: "bold",
      }}
    >
      <p
        className="ui label"
        style={{
          fontFamily: "Fredericka the Great",
          writingMode: "vertical-rl",
          textOrientation: "upright",
          textAlign: "center",
          backgroundColor: "#696969",
          color: "#ece8dc",
        }}
      >
        Lumière blanche
      </p>
      {isLoading ? (
        <Chargement />
      ) : (
        <Chart data={data} axes={axes} series={series} />
      )}
    </div>
  );
};

export default WhiteLightChart;
