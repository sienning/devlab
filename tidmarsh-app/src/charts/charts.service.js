import axios from "axios";
import dayjs from "dayjs";
import { useQuery } from "react-query";

const API_AGGREGATE_DATA_URL = (sensor_id) =>
  `/aggregate_data/?sensor_id=${sensor_id}&aggtime=1h`;

const getLastDayData = (datas) => {
  const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD").toString();
  const result = [];
  for (let i = 0; i < 24; ++i) {
    const toFound =
      yesterday +
      "T" +
      (i.toString().length === 1 ? "0" + i.toString() : i.toString());
    result.push({
      x: i,
      y: datas?.find((data) => data.timestamp.includes(toFound))?.mean,
    });
  }
  return result;
};

export const useWhiteLightData = (sensorId, config = {}) => {
  return useQuery(
    ["whiteLight"],
    () =>
      axios.get(API_AGGREGATE_DATA_URL(sensorId)).then((response) => {
        return {
          ...response?.data,
          data: getLastDayData(response?.data?.data),
        };
      }),
    {
      ...config,
    }
  );
};

export const useHumidityData = (sensorId, config = {}) => {
  return useQuery(
    ["humidity"],
    () =>
      axios.get(API_AGGREGATE_DATA_URL(sensorId)).then((response) => {
        return {
          ...response?.data,
          data: getLastDayData(response?.data?.data),
        };
      }),
    {
      ...config,
    }
  );
};

export const useTemperatureData = (sensorId, config = {}) => {
  return useQuery(
    ["temperature"],
    () =>
      axios.get(API_AGGREGATE_DATA_URL(sensorId)).then((response) => {
        return {
          ...response?.data,
          data: getLastDayData(response?.data?.data),
        };
      }),
    {
      ...config,
    }
  );
};
